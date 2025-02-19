import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  public cardsList:any[] = [
    {
      title:"TAKE A HUGE BITE OUT OF THE BIG APPLE",
      location:"New York City, USA",
      imgUrl:"https://static.wixstatic.com/media/84770f_b769f5998f1d4befb540f8e051d723c5.jpg/v1/fill/w_484,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_b769f5998f1d4befb540f8e051d723c5.jpg",
      type:"eat",
      typeImgUrl:"https://static.wixstatic.com/media/3963cf22f5e14a25a77ebe37298a8d3b.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3963cf22f5e14a25a77ebe37298a8d3b.png",
      descpription:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      price:5780,
      days:14,
      mapImg:"https://static.wixstatic.com/media/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png/v1/fill/w_286,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png"
    },
    {
      title:"SWIM & DIVEWITH TIGER SHARKS",
      location:"Bahamas, Caribbean",
      imgUrl:"https://static.wixstatic.com/media/b2c0a7_719b33bea13029df2210a3728d82139c.jpg/v1/fill/w_484,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b2c0a7_719b33bea13029df2210a3728d82139c.jpg",
      type:"play",
      typeImgUrl:"https://static.wixstatic.com/media/a828568f6b7d48b3b874b5114f521d6e.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a828568f6b7d48b3b874b5114f521d6e.png",
      descpription:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      price:5780,
      days:14,
      mapImg:"https://static.wixstatic.com/media/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png/v1/fill/w_286,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png"
    },
    {
      title:"DETOX & REJUVENATE IN THAI LUXURY",
      location:"Ko Pha Ngan, Thailand",
      imgUrl:"https://static.wixstatic.com/media/b2c0a7_440b325c1eb44bbf8fa0303eedcf40c4.jpg/v1/fill/w_484,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b2c0a7_440b325c1eb44bbf8fa0303eedcf40c4.jpg",
      type:"relax",
      typeImgUrl:"https://static.wixstatic.com/media/c01f34f8035346eb80bb2b29ab7dc702.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c01f34f8035346eb80bb2b29ab7dc702.png",
      descpription:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      price:5780,
      days:14,
      mapImg:"https://static.wixstatic.com/media/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png/v1/fill/w_286,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png"
    },
    {
      title:"LEARN TO COOK IN FRENCH",
      location:"Paris, France",
      imgUrl:"https://static.wixstatic.com/media/b2c0a7_9def863f4e78426485aea4880397c4e6.png/v1/fill/w_484,h_186,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_9def863f4e78426485aea4880397c4e6.png",
      type:"eat",
      typeImgUrl:"https://static.wixstatic.com/media/3963cf22f5e14a25a77ebe37298a8d3b.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3963cf22f5e14a25a77ebe37298a8d3b.png",
      descpription:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      price:5780,
      days:14,
      mapImg:"https://static.wixstatic.com/media/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png/v1/fill/w_286,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png"
    },
    {
      title:"CYCLE THROUGH THE ROCKY MOUNTAINS",
      location:"Denver, USA",
      imgUrl:"https://static.wixstatic.com/media/b2c0a7_7b171712550e481d8da44101d2d558bb.jpg/v1/fill/w_484,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b2c0a7_7b171712550e481d8da44101d2d558bb.jpg",
      type:"play",
      typeImgUrl:"https://static.wixstatic.com/media/a828568f6b7d48b3b874b5114f521d6e.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a828568f6b7d48b3b874b5114f521d6e.png",
      descpription:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      price:5780,
      days:14,
      mapImg:"https://static.wixstatic.com/media/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png/v1/fill/w_286,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png"
    },
    {
      title:"EXPLORE  THE LAST HAVENS ON THE PLANET",
      location:"The Sahara, Africa",
      imgUrl:"https://static.wixstatic.com/media/b2c0a7_183894a0583a3060281477a81095bb34.jpg/v1/fill/w_484,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b2c0a7_183894a0583a3060281477a81095bb34.jpg",
      type:"relax",
      typeImgUrl:"https://static.wixstatic.com/media/c01f34f8035346eb80bb2b29ab7dc702.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c01f34f8035346eb80bb2b29ab7dc702.png",
      descpription:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
      price:5780,
      days:14,
      mapImg:"https://static.wixstatic.com/media/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png/v1/fill/w_286,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b2c0a7_45914f2d5a40f1d8826ac17af6284cca.png"
    }
  ];

  getAllCards(){
    return this.cardsList;
  }

  getFilteredCards(type:string){
    return this.cardsList.filter(card => card.type == type);
  }

  constructor() { }
}
