export function setCookie(name: string, value: string | null, props?: Record<string, string | number | boolean | Date>): void {
  props = props || {
    path: '/'
  };
  let exp: string | number | boolean | Date = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if(exp instanceof Date) {
    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }
  }
  if(value) {
    value = encodeURIComponent(value);
  }
  let updatedCookie = name + '=' + value;
  if(props) {
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string): void {
  setCookie(name, null, { expires: -1 });
}