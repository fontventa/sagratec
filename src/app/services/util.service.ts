import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  static isNumber(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static isNullOrUndefined(object: any): object is null | undefined {
    return object === null || object === undefined;
  }

  static isLengthGreatThan0(object: any): boolean {
    return !this.isNullOrUndefined(object) && object.toString().trim().length > 0;
  }

  static isValidDniCif(nif: string): any {
    let validDNI = false;
    let validCIF = false;
    if (this.isLengthGreatThan0(nif)) {
        const value = nif.trim().replace(' ', '').replace('-', '');
        validDNI = this.isValidDNINIE(value);
        validCIF = this.isValidCIF(value);
    }
    return validDNI || validCIF;
  }

  static isValidDNINIE(dninie: string): boolean {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    const str = dninie.toUpperCase();
    if (!nifRexp.test(str) && !nieRexp.test(str)) { return false; }
    const nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');
    const letter = str.substr(-1);
    const charIndex = parseInt(nie.substr(0, 8), 10) % 23;
    if (validChars.charAt(charIndex) === letter) { return true; }
    return false;
  }

  static isValidCIF(cif: string): boolean {
    cif = cif.toUpperCase();
    const regexCIF = /^([ABCDEFGHJNUVW]\d{8}|[NPQRSW]\d{7}[A-Z])$/;

    if (regexCIF.test(cif)) {
      // Calculamos el dígito de control
      const equivLetras = 'JABCDEFGHI';
      // Obtenemos el número de CIF
      const num = cif.substr(1, 7);
      // Sumamos las posiciones pares.
      const sum1 = parseInt(num[1], 10) + parseInt(num[3], 10) + parseInt(num[5], 10);
      // Multiplicamos por 2 las posiciones impares y sumamos sus cifras, a continuación las acumulamos
      let sum2_1 = parseInt(num[0], 10) * 2;
      let sum2_2 = parseInt(num[2], 10) * 2;
      let sum2_3 = parseInt(num[4], 10) * 2;
      let sum2_4 = parseInt(num[6], 10) * 2;
      if (sum2_1 > 9) {
        sum2_1 = parseInt(sum2_1.toString()[0], 10) + parseInt(sum2_1.toString()[1], 10);
      }
      if (sum2_2 > 9) {
        sum2_2 = parseInt(sum2_2.toString()[0], 10) + parseInt(sum2_2.toString()[1], 10);
      }
      if (sum2_3 > 9) {
        sum2_3 = parseInt(sum2_3.toString()[0], 10) + parseInt(sum2_3.toString()[1], 10);
      }
      if (sum2_4 > 9) {
        sum2_4 = parseInt(sum2_4.toString()[0], 10) + parseInt(sum2_4.toString()[1], 10);
      }
      const sum2 = sum2_1 + sum2_2 + sum2_3 + sum2_4;
      const sum = sum1 + sum2;
      const digito = sum % 10;
      const DC = (10 - digito) % 10;
      if (cif.substr(8, 1) == DC.toString() || cif.substr(8, 1) == equivLetras[DC]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  static isValidEmail(email: string): boolean {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return this.isLengthGreatThan0(email) && EMAIL_REGEXP.test(email.trim());
  }

  static emailValido(email: string): boolean {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (email != undefined && email != null && email.trim().length > 0 && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
        return false;
    }
    return true;
  }

  // static isValidPhone(tel: string) {
  //   return this.isLengthGreatThan0(tel) && libphonenumber.parsePhoneNumberFromString(tel.trim(), 'ES');
  // }

  // static isValidIBAN(iban: string) {
  //   return this.isLengthGreatThan0(iban) && IBAN.isValid(iban.trim());
  // }

  static queryString(name: string) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

static updateProgressBar(total:number, paso:number){

  var progreso = 1/total;

  return progreso * paso;

}

static loadDataOfList(obj1: any, list: any): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (obj1 != null) {
        resolve(list.filter((x) => x.id == obj1.id)[0])
      } else {
        resolve(null)
      }
    } catch(ex) {
      reject(ex)
    }   
  })   
}

static formatNumber(nStr: string) {
  let sep = '.';
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? ',' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + sep + '$2');
  }
  return x1 + x2;
}

static formatCurrency(nStr: string) {
  let sep = '.';
  nStr += '';
  let x = parseFloat(nStr).toFixed(2).split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? ',' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
 
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + sep + '$2');
  }
  return x1 + x2 + ' €';
}

static numeroAbsoluto(num: number) {
  if (num != null && !isNaN(num)) {
    return Math.abs(num)
  } else {
    return null;
  }
}

static getIdNegativo(list: any[]) {
  
  if(list.length > 0){
      var lastId = list[list.length - 1];
      return lastId - 1;
  }else{
    return -1;
  }
}


}
