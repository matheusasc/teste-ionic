
import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fingerprintAIO: FingerprintAIO) {}


  authenticateWithBiometrics() {
    this.fingerprintAIO
      .show({
        title: 'Autenticação Biométrica',
        subtitle: 'Toque no sensor de impressão digital',
        description: 'Toque no sensor de impressão digital para desbloquear',
      })
      .then((result: any) => {
        if (result === 'OK') {
          // Autenticação bem-sucedida
          console.log('Autenticação biométrica bem-sucedida');
        } else {
          // Autenticação falhou
          console.error('Falha na autenticação biométrica');
        }
      })
      .catch((error: any) => {
        // Tratamento de erro
        console.error('Erro na autenticação biométrica', error);
      });
  }

}
