import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { testPlate } from 'src/interfaces/testPlate.interface';
import { Plate } from 'src/interfaces/plate.interface';
import { adminPlate } from 'src/interfaces/adminPlate.interface';

@Injectable()
export class AddPlateScriptService {
  constructor(
    @InjectModel('Plate') private readonly plateModel: Model<Plate>,
    @InjectModel('testPlate') private readonly testplateModel: Model<testPlate>,
    @InjectModel('adminPlate')
    private readonly adminplateModel: Model<adminPlate>,
  ) {}

  //PERAK

  //Melaka

  async sequence(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b878e84490ffc30235c3',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'A9999':
        for (let i = 65; i < 90; i++) {
          this.sequence(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'AY9999':
        firstChar = 'AA';
        for (let k = 65; k < 90; k++) {
          this.sequence(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'AAY9999':
        firstChar = 'AB';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'ABY9999':
        firstChar = 'AC';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'ACY9999':
        firstChar = 'AD';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'ADY9999':
        firstChar = 'AE';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AEY9999':
        firstChar = 'AF';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AFY9999':
        firstChar = 'AG';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AGY9999':
        firstChar = 'AH';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AHY9':
        firstChar = 'AI';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AIY9999':
        firstChar = 'AJ';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AJY9999':
        firstChar = 'AK';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'AKY9999':
        firstChar = 'AL';
        for (let h = 65; h < 90; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'ALY9999':
        firstChar = 'AM';
        for (let h = 65; h < 88; h++) {
          this.sequence(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }
  //Melaka

  async stateB(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b883e84490ffc30235c5',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'B9999':
        for (let i = 65; i < 90; i++) {
          this.stateB(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'BY9999':
        firstChar = 'BA';
        for (let k = 65; k < 90; k++) {
          this.stateB(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'BAY9999':
        firstChar = 'BB';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'BBY9999':
        firstChar = 'BC';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BCY9999':
        firstChar = 'BD';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BDY9999':
        firstChar = 'BE';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BEY9999':
        firstChar = 'BF';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BFY9999':
        firstChar = 'BG';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BGY9999':
        firstChar = 'BH';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BHY9999':
        firstChar = 'BI';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BIY9999':
        firstChar = 'BJ';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BJY9999':
        firstChar = 'BK';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BKY9999':
        firstChar = 'BL';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BLY9999':
        firstChar = 'BM';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BMY9999':
        firstChar = 'BN';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BNY9999':
        firstChar = 'BO';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BOY9999':
        firstChar = 'BP';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BPY9999':
        firstChar = 'BQ';
        for (let h = 65; h < 90; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'BQY9999':
        firstChar = 'BR';
        for (let h = 65; h < 73; h++) {
          this.stateB(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  //Melaka

  async stateC(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b8a0e84490ffc30235cb',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'C9999':
        for (let i = 65; i < 90; i++) {
          this.stateC(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'CY9999':
        firstChar = 'CA';
        for (let k = 65; k < 90; k++) {
          this.stateC(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'CAY9999':
        firstChar = 'CB';
        for (let h = 65; h < 90; h++) {
          this.stateC(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'CBY9999':
        firstChar = 'CC';
        for (let h = 65; h < 90; h++) {
          this.stateC(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'CCY9999':
        firstChar = 'CD';
        for (let h = 65; h < 90; h++) {
          this.stateC(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'CDY9999':
        firstChar = 'CE';
        for (let h = 65; h < 85; h++) {
          this.stateC(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  async stateD(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b86de84490ffc30235c1',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'D9999':
        for (let i = 65; i < 90; i++) {
          this.stateD(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'DY9999':
        firstChar = 'DA';
        for (let k = 65; k < 90; k++) {
          this.stateD(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'DAY9999':
        firstChar = 'DB';
        for (let h = 65; h < 90; h++) {
          this.stateD(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'DBY9999':
        firstChar = 'DC';
        for (let h = 65; h < 90; h++) {
          this.stateD(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'DCY9999':
        firstChar = 'DD';
        for (let h = 65; h < 90; h++) {
          this.stateD(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'DDY9999':
        firstChar = 'DE';
        for (let h = 65; h < 82; h++) {
          this.stateD(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  async stateF(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b8b9e84490ffc30235d1',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'F9999':
        for (let i = 65; i < 69; i++) {
          this.stateF(firstChar + '' + String.fromCharCode(i));
        }
        break;
    }
    //});
  }

  //Melaka

  async stateK(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b864e84490ffc30235bf',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'K9999':
        for (let i = 65; i < 90; i++) {
          this.stateK(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'KY9999':
        firstChar = 'KA';
        for (let k = 65; k < 90; k++) {
          this.stateK(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'KAY9999':
        firstChar = 'KB';
        for (let h = 65; h < 90; h++) {
          this.stateK(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'KBY9999':
        firstChar = 'KC';
        for (let h = 65; h < 90; h++) {
          this.stateK(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'KCY9999':
        firstChar = 'KD';
        for (let h = 65; h < 90; h++) {
          this.stateK(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'KDY9999':
        firstChar = 'KE';
        for (let h = 65; h < 90; h++) {
          this.stateK(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'KEY9999':
        firstChar = 'KF';
        for (let h = 65; h < 79; h++) {
          this.stateK(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  async stateL(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log(value, '----------');

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '64198092de976cd7575d8407',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'L9999':
        for (let i = 65; i < 73; i++) {
          this.stateL(firstChar + '' + String.fromCharCode(i));
        }
        break;
    }
    //});
  }

  async stateM(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log(value, '----------');

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b88be84490ffc30235c7',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'M9999':
        for (let i = 65; i < 90; i++) {
          this.stateM(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'MY9999':
        firstChar = 'MA';
        for (let k = 65; k < 90; k++) {
          this.stateM(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'MAY9999':
        firstChar = 'MB';
        for (let h = 65; h < 90; h++) {
          this.stateM(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'MBY9999':
        firstChar = 'MC';
        for (let h = 65; h < 90; h++) {
          this.stateM(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'MCY9999':
        firstChar = 'MD';
        for (let h = 65; h < 83; h++) {
          this.stateM(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  async stateN(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log(value, '----------');

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b895e84490ffc30235c9',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'N9999':
        for (let i = 65; i < 90; i++) {
          this.stateN(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'NY9999':
        firstChar = 'NA';
        for (let k = 65; k < 90; k++) {
          this.stateN(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'NAY9999':
        firstChar = 'NB';
        for (let h = 65; h < 90; h++) {
          this.stateN(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'NBY9999':
        firstChar = 'NC';
        for (let h = 65; h < 90; h++) {
          this.stateN(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'NCY9999':
        firstChar = 'ND';
        for (let h = 65; h < 88; h++) {
          this.stateN(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  async stateR(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log(value, '----------');
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b8a7e84490ffc30235cd',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'R9999':
        for (let i = 65; i < 90; i++) {
          this.stateR(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'RY9999':
        firstChar = 'RA';
        for (let k = 65; k < 81; k++) {
          this.stateR(firstChar + '' + String.fromCharCode(k));
        }
        break;
    }
    //});
  }

  async stateT(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log(value, '----------');

      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b8efe84490ffc30235d7',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'T9999':
        for (let i = 65; i < 90; i++) {
          this.stateT(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'TY9999':
        firstChar = 'TA';
        for (let k = 65; k < 90; k++) {
          this.stateT(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'TAY9999':
        firstChar = 'TB';
        for (let h = 65; h < 90; h++) {
          this.stateT(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'TBY9999':
        firstChar = 'TC';
        for (let h = 65; h < 82; h++) {
          this.stateT(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  //Melaka

  async stateP(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b8b0e84490ffc30235cf',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'P9999':
        for (let i = 65; i < 90; i++) {
          this.stateP(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'PY9999':
        firstChar = 'PA';
        for (let k = 65; k < 90; k++) {
          this.stateP(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'PAY9999':
        firstChar = 'PB';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'PBY9999':
        firstChar = 'PC';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PCY9999':
        firstChar = 'PD';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PDY9999':
        firstChar = 'PE';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PEY9999':
        firstChar = 'PF';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PFY9999':
        firstChar = 'PG';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PGY9999':
        firstChar = 'PH';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PHY9999':
        firstChar = 'PI';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PIY9999':
        firstChar = 'PJ';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PJY9999':
        firstChar = 'PK';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PKY9999':
        firstChar = 'PL';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PLY9999':
        firstChar = 'PM';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PMY9999':
        firstChar = 'PN';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PNY9999':
        firstChar = 'PO';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'POY9999':
        firstChar = 'PP';
        for (let h = 65; h < 90; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'PPY9999':
        firstChar = 'PQ';
        for (let h = 65; h < 85; h++) {
          this.stateP(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }

  async stateQ(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }

  async stateQA(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }

  async stateQK(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }

  async stateQB(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }

  async stateQC(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }

  async stateQL(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }
  async stateQM(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }
  async stateQP(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }
  async stateQR(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }
  async stateQS(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }
  async stateQT(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6396ab885e43b466617700fa',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {

    //});
  }

  //Melaka

  async JOHOR(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6346b840e84490ffc30235bd',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'J9999':
        for (let i = 65; i < 90; i++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'JY9999':
        firstChar = 'JA';
        for (let k = 65; k < 90; k++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'JAY9999':
        firstChar = 'JB';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'JBY9999':
        firstChar = 'JC';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JCY9999':
        firstChar = 'JD';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JDY9999':
        firstChar = 'JE';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JEY9999':
        firstChar = 'JF';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JFY9999':
        firstChar = 'JG';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JGY9999':
        firstChar = 'JH';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JHY9999':
        firstChar = 'JI';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JIY9999':
        firstChar = 'JJ';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JJY9999':
        firstChar = 'JK';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JKY9999':
        firstChar = 'JL';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      // case 'JLY9999':
      //   firstChar = 'JM';
      //   for (let h = 65; h < 90; h++) {
      //     this.JOHOR(firstChar + '' + String.fromCharCode(h));
      //   }
      // break;
      case 'JLY9999':
        firstChar = 'JM';
        for (let h = 65; h < 72; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JMG9999':
        firstChar = 'JM';
        for (let h = 72; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JMY9999':
        firstChar = 'JN';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JNY9999':
        firstChar = 'JO';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JOY9999':
        firstChar = 'JP';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JPY9999':
        firstChar = 'JQ';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JQY9999':
        firstChar = 'JR';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JRY9999':
        firstChar = 'JS';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JSY9999':
        firstChar = 'JT';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JTY9999':
        firstChar = 'JU';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JUY9999':
        firstChar = 'JV';
        for (let h = 65; h < 90; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'JVY9999':
        firstChar = 'JW';
        for (let h = 65; h < 68; h++) {
          this.JOHOR(firstChar + '' + String.fromCharCode(h));
        }
        break;

      default:
        break;
    }
    //});
  }
  async KUALA(firstChar: string) {
    let value: string;
    for (let j = 1; j <= 9999; j++) {
      value = firstChar + '' + j;
      console.log('---', value);
      await this.testplateModel.create({
        plate_number: value,
        add_by: 0,
        sell_status: 2,
        state: '6348eb4c64bcb81527cb3596',
        name: '',
        email: '',
        phone: '',
      });
    }

    //ANumericArray.forEach((element) => {
    switch (value) {
      case 'V9999':
        for (let i = 65; i < 90; i++) {
          this.KUALA(firstChar + '' + String.fromCharCode(i));
        }
        break;

      case 'VY9999':
        firstChar = 'VA';
        for (let k = 65; k < 90; k++) {
          this.KUALA(firstChar + '' + String.fromCharCode(k));
        }
        break;

      case 'VAY9999':
        firstChar = 'VB';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;

      case 'VBY9999':
        firstChar = 'VC';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VCY9999':
        firstChar = 'VD';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VDY9999':
        firstChar = 'VE';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VEY9999':
        firstChar = 'VF';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VFY9999':
        firstChar = 'VG';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VGY9999':
        firstChar = 'VH';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VHY9999':
        firstChar = 'VI';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VIY9999':
        firstChar = 'VJ';
        for (let h = 65; h < 90; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
      case 'VJY9999':
        firstChar = 'VK';
        for (let h = 65; h < 78; h++) {
          this.KUALA(firstChar + '' + String.fromCharCode(h));
        }
        break;
    }
    //});
  }
  // async stateA(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9; j++) {
  //     // value = firstChar + j + '';
  //     // for (let i = 72) {

  //     value = firstChar + j + String.fromCharCode(71);
  //     console.log('-----------', value);

  //     // console.log('-----------', value);

  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  // ANumericArray.forEach((element) => {
  // switch (value) {
  //   case 'WA9Y':
  //     for (let i = 65; i < 90; i++) {
  //       for (let k = 66; k < 67; k++) {
  //         this.stateA(
  //           firstChar + String.fromCharCode(k) + String.fromCharCode(i),
  //         );
  //         // console.log('-----------', value);
  //       }
  //     }
  //     break;

  //   case 'FY9999999':
  //     firstChar = 'FA';
  //     for (let k = 65; k < 90; k++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(k));
  //     }
  //     break;

  //   case 'FAY9999':
  //     firstChar = 'FB';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;

  //   case 'FBY9999':
  //     firstChar = 'FC';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FCY9999':
  //     firstChar = 'FD';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FDY9999':
  //     firstChar = 'FE';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FEY9999':
  //     firstChar = 'FF';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FFY9999':
  //     firstChar = 'FG';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FGY9999':
  //     firstChar = 'FH';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FHY9999':
  //     firstChar = 'FI';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FIY9999':
  //     firstChar = 'FJ';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FJY9999':
  //     firstChar = 'FK';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FKY9999':
  //     firstChar = 'FL';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FLY9999':
  //     firstChar = 'FM';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FMY9999':
  //     firstChar = 'FN';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FNY9999':
  //     firstChar = 'FO';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FOY9999':
  //     firstChar = 'FP';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FPY9999':
  //     firstChar = 'FQ';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FQY9999':
  //     firstChar = 'FR';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FRY9999':
  //     firstChar = 'FS';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FSY9999':
  //     firstChar = 'FT';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FTY9999':
  //     firstChar = 'FU';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FUY9999':
  //     firstChar = 'FV';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FVY9999':
  //     firstChar = 'FW';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FWY9999':
  //     firstChar = 'FX';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }
  //     break;
  //   case 'FXY9999':
  //     firstChar = 'FY';
  //     for (let h = 65; h < 90; h++) {
  //       this.stateA(firstChar + '' + String.fromCharCode(h));
  //     }

  //   default:
  //     break;
  // }
  // });
  // }
  // //SELANGOR

  // async stateB(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;

  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6346b840e84490ffc30235bd',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'J9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'JY9999':
  //       firstChar = 'JA';
  //       for (let k = 65; k < 90; k++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'JAY9999':
  //       firstChar = 'JB';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'JBY9999':
  //       firstChar = 'JC';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JCY9999':
  //       firstChar = 'JD';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JDY9999':
  //       firstChar = 'JE';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JEY9999':
  //       firstChar = 'JF';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JFY9999':
  //       firstChar = 'JG';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JGY9999':
  //       firstChar = 'JH';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JHY9999':
  //       firstChar = 'JI';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JIY9999':
  //       firstChar = 'JJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JJY9999':
  //       firstChar = 'JK';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JKY9999':
  //       firstChar = 'JL';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JLY9999':
  //       firstChar = 'JM';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JMY9999':
  //       firstChar = 'JN';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JNY9999':
  //       firstChar = 'JO';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JOY9999':
  //       firstChar = 'JP';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JPY9999':
  //       firstChar = 'JQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JQY9999':
  //       firstChar = 'JR';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JRY9999':
  //       firstChar = 'JS';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JSY9999':
  //       firstChar = 'JT';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JTY9999':
  //       firstChar = 'JU';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JUY9999':
  //       firstChar = 'JV';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JVY9999':
  //       firstChar = 'JW';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JWY9999':
  //       firstChar = 'JX';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'JXY9999':
  //       firstChar = 'JY';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateB(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // //PAHANG

  // async stateC(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6348eb4c64bcb81527cb3596',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'W9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'WY9999':
  //       firstChar = 'WA';
  //       for (let k = 65; k < 90; k++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'WAY9999':
  //       firstChar = 'WB';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'WBY9999':
  //       firstChar = 'WC';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WCY9999':
  //       firstChar = 'WD';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WDY9999':
  //       firstChar = 'WE';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WEY9999':
  //       firstChar = 'WF';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WFY9999':
  //       firstChar = 'WG';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WGY9999':
  //       firstChar = 'WH';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WHY9999':
  //       firstChar = 'WI';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WIY9999':
  //       firstChar = 'WJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WJY9999':
  //       firstChar = 'WK';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WKY9999':
  //       firstChar = 'WL';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WLY9999':
  //       firstChar = 'WM';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WMY9999':
  //       firstChar = 'WN';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WNY9999':
  //       firstChar = 'WO';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WOY9999':
  //       firstChar = 'WP';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WPY9999':
  //       firstChar = 'WQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WQY9999':
  //       firstChar = 'WR';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WRY9999':
  //       firstChar = 'WS';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WSY9999':
  //       firstChar = 'WT';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WTY9999':
  //       firstChar = 'WU';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WUY9999':
  //       firstChar = 'WV';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WVY9999':
  //       firstChar = 'WW';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WWY9999':
  //       firstChar = 'WX';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'WXY9999':
  //       firstChar = 'WY';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateC(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // //KELANTAN

  // async stateD(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6348eb4c64bcb81527cb3596',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'V9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'VY9999':
  //       firstChar = 'VA';
  //       for (let k = 65; k < 90; k++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'VAY9999':
  //       firstChar = 'VB';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'VBY9999':
  //       firstChar = 'VC';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VCY9999':
  //       firstChar = 'VD';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VDY9999':
  //       firstChar = 'VE';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VEY9999':
  //       firstChar = 'VF';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VFY9999':
  //       firstChar = 'VG';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VGY9999':
  //       firstChar = 'VH';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VHY9999':
  //       firstChar = 'VI';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VIY9999':
  //       firstChar = 'VJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VJY9999':
  //       firstChar = 'VK';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VKY9999':
  //       firstChar = 'VL';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VLY9999':
  //       firstChar = 'VM';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VMY9999':
  //       firstChar = 'VN';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VNY9999':
  //       firstChar = 'VO';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VOY9999':
  //       firstChar = 'VP';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VPY9999':
  //       firstChar = 'VQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VQY9999':
  //       firstChar = 'VR';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VRY9999':
  //       firstChar = 'VS';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VSY9999':
  //       firstChar = 'VT';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VTY9999':
  //       firstChar = 'VU';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VUY9999':
  //       firstChar = 'VV';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VVY9999':
  //       firstChar = 'VW';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VWY9999':
  //       firstChar = 'VX';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'VXY9999':
  //       firstChar = 'VY';
  //       for (let h = 65; h < 90; h++) {
  //         this.stateD(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }

  // //KEDAH

  // async stateB(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6346b864e84490ffc30235bf',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'K9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'KY9999':
  //       firstChar = 'KA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'KAY9999':
  //       firstChar = 'KB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'KBY9999':
  //       firstChar = 'KC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KCY9999':
  //       firstChar = 'KD';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KDY9999':
  //       firstChar = 'KE';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KEY9999':
  //       firstChar = 'KF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KFY9999':
  //       firstChar = 'KG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KGY9999':
  //       firstChar = 'KH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KHY9999':
  //       firstChar = 'KI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KIY9999':
  //       firstChar = 'KJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KJY9999':
  //       firstChar = 'KK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KKY9999':
  //       firstChar = 'KL';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KLY9999':
  //       firstChar = 'KM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KMY9999':
  //       firstChar = 'KN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KNY9999':
  //       firstChar = 'KO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KOY9999':
  //       firstChar = 'KP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KPY9999':
  //       firstChar = 'KQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KQY9999':
  //       firstChar = 'KR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KRY9999':
  //       firstChar = 'KS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KSY9999':
  //       firstChar = 'KT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KTY9999':
  //       firstChar = 'KU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KUY9999':
  //       firstChar = 'KV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KVY9999':
  //       firstChar = 'KW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KWY9999':
  //       firstChar = 'KX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'KXY9999':
  //       firstChar = 'KY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequence(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // //LABUAN
  // async sequences(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '64198092de976cd7575d8407',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'L9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'LY9999':
  //       firstChar = 'LA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'LAY9999':
  //       firstChar = 'LB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'LBY9999':
  //       firstChar = 'LC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LCY9999':
  //       firstChar = 'LD';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LDY9999':
  //       firstChar = 'LE';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LEY9999':
  //       firstChar = 'LF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LFY9999':
  //       firstChar = 'LG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LGY9999':
  //       firstChar = 'LH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LHY9999':
  //       firstChar = 'LI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LIY9999':
  //       firstChar = 'LJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LJY9999':
  //       firstChar = 'LK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LKY9999':
  //       firstChar = 'LL';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LLY9999':
  //       firstChar = 'LM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LMY9999':
  //       firstChar = 'LN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LNY9999':
  //       firstChar = 'LO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LOY9999':
  //       firstChar = 'LP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LPY9999':
  //       firstChar = 'LQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LQY9999':
  //       firstChar = 'LR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LRY9999':
  //       firstChar = 'LS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LSY9999':
  //       firstChar = 'LT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LTY9999':
  //       firstChar = 'LU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LUY9999':
  //       firstChar = 'LV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LVY9999':
  //       firstChar = 'LW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LWY9999':
  //       firstChar = 'LX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'LXY9999':
  //       firstChar = 'LY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequences(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  // }
  // //Melaka

  // async sequencess(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6346b88be84490ffc30235c7',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'A9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'NY9999':
  //       firstChar = 'NA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'NAY9999':
  //       firstChar = 'MB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'MBY9999':
  //       firstChar = 'MC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MCY9999':
  //       firstChar = 'MD';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MDY9999':
  //       firstChar = 'ME';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MEY9999':
  //       firstChar = 'MF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MFY9999':
  //       firstChar = 'MG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MGY9999':
  //       firstChar = 'MH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MHY9999':
  //       firstChar = 'MI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MIY9999':
  //       firstChar = 'MJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MJY9999':
  //       firstChar = 'MK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MKY9999':
  //       firstChar = 'ML';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MLY9999':
  //       firstChar = 'MM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MMY9999':
  //       firstChar = 'MN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MNY9999':
  //       firstChar = 'MO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MOY9999':
  //       firstChar = 'MP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MPY9999':
  //       firstChar = 'MQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MQY9999':
  //       firstChar = 'MR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MRY9999':
  //       firstChar = 'MS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MSY9999':
  //       firstChar = 'MT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MTY9999':
  //       firstChar = 'MU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MUY9999':
  //       firstChar = 'MV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MVY9999':
  //       firstChar = 'MW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MWY9999':
  //       firstChar = 'MX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'MXY9999':
  //       firstChar = 'MY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencess(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // //NEGERI SEMBILAN
  // async sequencesss(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6346b895e84490ffc30235c9',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'N9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'NY9999':
  //       firstChar = 'NA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'NAY9999':
  //       firstChar = 'NB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'NBY9999':
  //       firstChar = 'NC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NCY9999':
  //       firstChar = 'ND';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NDY9999':
  //       firstChar = 'NE';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NEY9999':
  //       firstChar = 'NF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NFY9999':
  //       firstChar = 'NG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NGY9999':
  //       firstChar = 'NH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NHY9999':
  //       firstChar = 'NI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NIY9999':
  //       firstChar = 'NJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NJY9999':
  //       firstChar = 'NK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NKY9999':
  //       firstChar = 'NL';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NLY9999':
  //       firstChar = 'NM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NMY9999':
  //       firstChar = 'NN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NNY9999':
  //       firstChar = 'NO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NOY9999':
  //       firstChar = 'NP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NPY9999':
  //       firstChar = 'NQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NQY9999':
  //       firstChar = 'NR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NRY9999':
  //       firstChar = 'NS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NSY9999':
  //       firstChar = 'NT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NTY9999':
  //       firstChar = 'NU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NUY9999':
  //       firstChar = 'NV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NVY9999':
  //       firstChar = 'NW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NWY9999':
  //       firstChar = 'NX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'NXY9999':
  //       firstChar = 'NY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesss(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // // PENANG
  // async sequencessss(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6346b8b0e84490ffc30235cf',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'P9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'PY9999':
  //       firstChar = 'PA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'PAY9999':
  //       firstChar = 'PB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'PBY9999':
  //       firstChar = 'PC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PCY9999':
  //       firstChar = 'PD';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PDY9999':
  //       firstChar = 'PE';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PEY9999':
  //       firstChar = 'PF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PFY9999':
  //       firstChar = 'PG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PGY9999':
  //       firstChar = 'PH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PHY9999':
  //       firstChar = 'PI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PIY9999':
  //       firstChar = 'PJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PJY9999':
  //       firstChar = 'PK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PKY9999':
  //       firstChar = 'PL';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PLY9999':
  //       firstChar = 'PM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PMY9999':
  //       firstChar = 'PN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PNY9999':
  //       firstChar = 'PO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'POY9999':
  //       firstChar = 'PP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PPY9999':
  //       firstChar = 'PQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PQY9999':
  //       firstChar = 'PR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PRY9999':
  //       firstChar = 'PS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PSY9999':
  //       firstChar = 'PT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PTY9999':
  //       firstChar = 'PU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PUY9999':
  //       firstChar = 'PV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PVY9999':
  //       firstChar = 'PW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PWY9999':
  //       firstChar = 'PX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'PXY9999':
  //       firstChar = 'PY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessss(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // //PERLIS
  // async sequencesssss(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6346b8a7e84490ffc30235cd',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'R9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'RY9999':
  //       firstChar = 'RA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'RAY9999':
  //       firstChar = 'RB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'RBY9999':
  //       firstChar = 'RC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RCY9999':
  //       firstChar = 'RD';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RDY9999':
  //       firstChar = 'RE';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'REY9999':
  //       firstChar = 'RF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RFY9999':
  //       firstChar = 'RG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RGY9999':
  //       firstChar = 'RH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RHY9999':
  //       firstChar = 'RI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RIY9999':
  //       firstChar = 'RJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RJY9999':
  //       firstChar = 'RK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RKY9999':
  //       firstChar = 'RL';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RLY9999':
  //       firstChar = 'RM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RMY9999':
  //       firstChar = 'RN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RNY9999':
  //       firstChar = 'RO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'ROY9999':
  //       firstChar = 'RP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RPY9999':
  //       firstChar = 'RQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RQY9999':
  //       firstChar = 'RR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RRY9999':
  //       firstChar = 'RS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RSY9999':
  //       firstChar = 'RT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RTY9999':
  //       firstChar = 'RU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RUY9999':
  //       firstChar = 'RV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RVY9999':
  //       firstChar = 'RW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RWY9999':
  //       firstChar = 'RX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'RXY9999':
  //       firstChar = 'RY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencesssss(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }
  // //TERENGGANU
  // async sequencessssss(firstChar: string) {
  //   let value: string;
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }

  //   //ANumericArray.forEach((element) => {
  //   switch (value) {
  //     case 'T9999':
  //       for (let i = 65; i < 90; i++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(i));
  //       }
  //       break;

  //     case 'TY9999':
  //       firstChar = 'TA';
  //       for (let k = 65; k < 90; k++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(k));
  //       }
  //       break;

  //     case 'TAY9999':
  //       firstChar = 'TB';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;

  //     case 'TBY9999':
  //       firstChar = 'TC';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TCY9999':
  //       firstChar = 'TD';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TDY9999':
  //       firstChar = 'TE';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TEY9999':
  //       firstChar = 'TF';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TFY9999':
  //       firstChar = 'TG';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TGY9999':
  //       firstChar = 'TH';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'THY9999':
  //       firstChar = 'TI';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TIY9999':
  //       firstChar = 'TJ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TJY9999':
  //       firstChar = 'TK';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TKY9999':
  //       firstChar = 'TL';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TLY9999':
  //       firstChar = 'TM';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TMY9999':
  //       firstChar = 'TN';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TNY9999':
  //       firstChar = 'TO';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TOY9999':
  //       firstChar = 'TP';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TPY9999':
  //       firstChar = 'TQ';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TQY9999':
  //       firstChar = 'TR';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TRY9999':
  //       firstChar = 'TS';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TSY9999':
  //       firstChar = 'TT';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TTY9999':
  //       firstChar = 'TU';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TUY9999':
  //       firstChar = 'TV';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TVY9999':
  //       firstChar = 'TW';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TWY9999':
  //       firstChar = 'TX';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }
  //       break;
  //     case 'TXY9999':
  //       firstChar = 'TY';
  //       for (let h = 65; h < 90; h++) {
  //         this.sequencessssss(firstChar + '' + String.fromCharCode(h));
  //       }

  //     default:
  //       break;
  //   }
  //   //});
  // }

  // async stateA(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateB(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);

  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateC(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateD(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateE(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateF(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateG(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateH(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateI(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateJ(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateK(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateL(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateM(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }

  // async stateN(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateO(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateP(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // async stateQ(firstChar: string) {
  //   let value: string;
  //   console.log('-------', value);
  //   for (let j = 1; j <= 9999; j++) {
  //     value = firstChar + '' + j;
  //     await this.adminplateModel.create({
  //       plate_number: value,
  //       add_by: 0,
  //       sell_status: 2,
  //       state: '6396ab885e43b466617700fa',
  //       name: '',
  //       email: '',
  //       phone: '',
  //     });
  //   }
  // }
  // }
}
