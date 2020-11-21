
import pMap from 'p-map';
import cheerio from 'cheerio';
import got from 'got';
import {resolve} from 'url'

class Crowller {
  private  url ='https://github.com/trending';
  async getRawHtml() {
    const result= await got(this.url);
    //console.log(result.body);
    //return result.body;
    this.getTrendingInfo(result.body);
  }

  getTrendingInfo(html:string) {
      const $= cheerio.load(html);
      const arr:string[] =[];
      $('.Box-row').map((index, element)=>{
         //console.log('index', index);
         const desc = $(element).find('h1');
         
         if(desc.text().length >0){
            console.log(desc.text().replace(/[\r\n]/g,''));
           
         }

      
      });
      console.log('arr', arr.length);
       

  }

  constructor(){
    this.getRawHtml();
  }


}

const crowller = new Crowller();


