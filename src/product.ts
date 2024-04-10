export class Product
{
    PName:string
    pPrice:number
    imgpath:string
    Pinfo:string

    constructor( PName:string,pPrice:number,imgpath:string,Pinfo:string)
    {
          this.PName=PName
          this.pPrice=pPrice
          this.imgpath=imgpath
          this.Pinfo=Pinfo
    }
}