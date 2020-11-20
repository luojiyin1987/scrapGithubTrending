
import pMap from 'p-map';
import cheerio from 'cheerio';
import got from 'got';
import {resolve} from 'url'

class Crowller {
  private  url ='https://github.com/trending';
  async getRawHtml() {
    const result= await got(this.url);
    console.log(result.body);
    return result.body;
  }

  getTrendingInfo(html:string) {
      const $= cheerio.load(html);

  }

  constructor(){
    this.getRawHtml();
  }


}

const crowller = new Crowller();


