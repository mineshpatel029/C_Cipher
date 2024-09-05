import { Component } from '@angular/core';

@Component({
  selector: 'app-caesar-cipher',
  templateUrl: './caesar-cipher.component.html',
  styleUrls: ['./caesar-cipher.component.css']
})
export class CaesarCipherComponent {
  shiftValue: number = 0;
  plainText: string = '';
  encryptedText: string = '';
  decryptedText: string = ''; // Add a property for the decrypted text

  encrypt() {
    this.encryptedText = this.caesarCipher(this.plainText, this.shiftValue);
  }

  decrypt() {
    this.decryptedText = this.caesarCipher(this.encryptedText, -this.shiftValue);
  }

  caesarCipher(text: string, shift: number): string {
    return text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
      }
      return char;
    }).join('');
  }
}
