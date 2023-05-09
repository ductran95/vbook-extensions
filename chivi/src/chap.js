let chapData = "";

function execute(url) {
    let urlParts = url.split("/");
    let cId = urlParts[urlParts.length - 2];
    let sSlug = urlParts[urlParts.length - 5];
    let sParts = sSlug.split("-");
    let sId = sParts[0];
    let sUrl = "https://chivi.app/_wn/chaps/" + sId + "/_/" + cId;
    
    let response = fetch(sUrl);

    if (response.ok) {
        let doc = response.json();

        chapData += doc.cvmtl;

        let data = parse_cvmtl(doc.cvmtl);
        let result = "";

        data.forEach(e => {
          result += "<p>" + e + "</p>";
        });

        return Response.success(chapData);
    }

    return null;
}

const escape_tags = { '&': '&amp;', '"': '&quot;', "'": '&apos;' }

function escape_html(str) {
  return str && str.replace(/[&<>]/g, x => escape_tags[x] || x)
}

function parse_cvmtl(input) {
  if (!input) return [[], 0, 0, '0-tong-hop']

  const [lines, extra] = input.split('\n$\t$\t$\n')
  // const args = extra.split('\t')

  return parse_lines(lines);
}

function parse_lines(input) {
  if (!input) return []

  chapData += input;

  return input.split('\n').map(x => {
    chapData += x;

    let data = parse(Array.from(x), 0)[0];
    return text(data)
  })
}

function parse(chars, i) {
  const data = []
  let term = []
  let word = ''

  while (i < chars.length) {
    const char = chars[i]
    i += 1

    switch (char) {
      case '〉':
        if (word) term.push(word)
        if (term.length > 0) data.push(term)
        return [data, i]

      case '〈':
        if (word) term.push(word)
        if (term.length > 0) data.push(term)
        const fold = chars[i]
        const [child, j] = parse(chars, i + 1)
        data.push([child, fold])
        i = j

        word = ''
        term = []

        break

      case '\t':
        if (word) term.push(word)
        if (term.length > 0) data.push(term)

        word = ''
        term = []

        break

      case 'ǀ':
        term.push(word)
        word = ''
        break

      default:
        word += char
    }
  }

  if (word) term.push(word)
  if (term.length > 0) data.push(term)

  return [data, i]
}

function text(data) {
  return render_cv(data, true, 0)
}

function render_cv(data, text, lvl) {
  let res = ''

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let val = item[0];
    let dic = item[1];
    let idx = item[2];
    let len = item[3];

    chapData += val;
    chapData += dic;
    chapData += idx;
    chapData += len;

    if (Array.isArray(val)) {
      const inner = render_cv(val, text, lvl)

      if (text) res += inner
      else res += `<v-g data-d=${dic}>${inner}</v-g>`
      continue
    }

    if (val == ' ') {
      res += ' '
      continue
    }

    const esc = escape_html(val)

    if (text) res += esc
    else {
      const l = idx
      const u = +idx + +len
      res += `<v-n data-d=${dic} data-l=${l} data-u=${u}>${esc}</v-n>`
    }
  }

  const first_val = data[0][0]

  if (typeof first_val == 'string') {
    const fval = first_val[0]

    if (fval == '“' || fval == '‘') {
      return '<em>' + res + '</em>'
    } else if (fval == '⟨') {
      return '<cite>' + res + '</cite>'
    }
  }

  const last_val = data[data.length - 1][0]
  if (typeof last_val == 'string') {
    const lval = last_val[last_val.length - 1]

    if (lval == '”' || lval == '’') {
      lvl -= 1
      res += '</em>'
    } else if (lval == '⟩') {
      res += '</cite>'
    }
  }

  return res
}
