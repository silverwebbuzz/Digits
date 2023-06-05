import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { AddPlateScriptService } from './service/addPlateScript.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private addPlateScriptService: AddPlateScriptService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sequence')
  sequence(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.sequence(firstChar);
  }

  @Post('stateB')
  stateB(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateB(firstChar);
  }

  @Post('stateC')
  stateC(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateC(firstChar);
  }

  @Post('stateD')
  stateD(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateD(firstChar);
  }

  @Post('stateF')
  stateF(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateF(firstChar);
  }

  @Post('stateK')
  stateK(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateK(firstChar);
  }

  @Post('stateL')
  stateL(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateL(firstChar);
  }

  @Post('stateM')
  stateM(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateM(firstChar);
  }

  @Post('stateN')
  stateN(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateN(firstChar);
  }

  @Post('stateR')
  stateR(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateR(firstChar);
  }

  @Post('stateT')
  stateT(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateT(firstChar);
  }

  @Post('stateP')
  stateP(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateP(firstChar);
  }

  @Post('stateQ')
  stateQ(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQ(firstChar);
  }
  @Post('stateQA')
  stateQA(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQA(firstChar);
  }
  @Post('stateQK')
  stateQK(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQK(firstChar);
  }
  @Post('stateQB')
  stateQB(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQB(firstChar);
  }
  @Post('stateQC')
  stateQC(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQC(firstChar);
  }
  @Post('stateQL')
  stateQL(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQL(firstChar);
  }
  @Post('stateQM')
  stateQM(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQM(firstChar);
  }
  @Post('stateQP')
  stateQP(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQP(firstChar);
  }
  @Post('stateQR')
  stateQR(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQR(firstChar);
  }
  @Post('stateQS')
  stateQS(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQS(firstChar);
  }
  @Post('stateQT')
  stateQT(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.stateQT(firstChar);
  }

  @Post('JOHOR')
  JOHOR(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.JOHOR(firstChar);
  }

  @Post('KUALA')
  KUALA(@Body('firstChar') firstChar: string) {
    return this.addPlateScriptService.KUALA(firstChar);
  }

  // @Post('stateB')
  // stateB(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateB(firstChar);
  // }
  // @Post('stateC')
  // stateC(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateC(firstChar);
  // }
  // @Post('stateD')
  // stateD(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateD(firstChar);
  // }
  // @Post('stateE')
  // stateE(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateE(firstChar);
  // }
  // @Post('stateF')
  // stateF(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateF(firstChar);
  // }
  // @Post('stateG')
  // stateG(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateG(firstChar);
  // }
  // @Post('stateH')
  // stateH(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateH(firstChar);
  // }
  // @Post('stateI')
  // stateI(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateI(firstChar);
  // }
  // @Post('stateJ')
  // stateJ(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateJ(firstChar);
  // }
  // @Post('stateK')
  // stateK(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateK(firstChar);
  // }
  // @Post('stateL')
  // stateL(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateL(firstChar);
  // }
  // @Post('stateM')
  // stateM(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateM(firstChar);
  // }
  // @Post('stateN')
  // stateN(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateN(firstChar);
  // }
  // @Post('stateO')
  // stateO(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateO(firstChar);
  // }
  // @Post('stateP')
  // stateP(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateP(firstChar);
  // }
  // @Post('stateQ')
  // stateQ(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateQ(firstChar);
  // }
  // @Post('stateD')
  // stateD(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.stateD(firstChar);
  // }

  // @Post('addPlateScripts')
  // addPLates(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.sequences(firstChar);
  // }
  // @Post('addPlateScriptss')
  // addPLatess(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.sequencess(firstChar);
  // }
  // @Post('addPlateScriptsss')
  // addPLatesss(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.sequencesss(firstChar);
  // }
  // @Post('addPlateScriptssss')
  // addPLatessss(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.sequencessss(firstChar);
  // }
  // @Post('addPlateScriptsssss')
  // addPLatesssss(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.sequencesssss(firstChar);
  // }
  // @Post('addPlateScriptssssss')
  // addPLatessssss(@Body('firstChar') firstChar: string) {
  //   return this.addPlateScriptService.sequencessssss(firstChar);
  // }
}
