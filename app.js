$(function (){
var tempN="";
var NowN="";
var FirstempOp="";
var SectempOP="";
var current="";
var i="0";
$(".num").on('click',function()
{
   if(tempN=="")
   {
    tempN=this.id;
    NowN=tempN;
    current=NowN;
    render();
    //alert(current);
   }
   else
   {
    tempN=NowN
    NowN=this.id;
    current+=NowN;
	render();
	//alert(current);
	//alert(tempN);
	//alert(NowN);
	}

})
function render()
{
	$("#message").text(current);
}
$(".clean").on('click',function()
{
	tempN= "";
	NowN="";
	FirstempOp="";
	SectempOP="";
	i=0;
	current="";
	render();
})
$(".op").on('click', function()
{
  if(FirstempOp=="")
  {
   FirstempOp= this.id;
   current+=this.id;
   render();
   //alert(FirstempOp);
  }
  else
  {
  	SectempOP=FirstempOp;
  	FirstempOp=this.id;
  	current+=this.id;
  	render();
  	//alert(SectempOP);

  }
			
})


$(".eq").on('click',function()
{
	//alert("hi");
	var tempNN=Number(tempN);
	var NowNN=Number(NowN);
	//alert(tempNN);
	//alert(NowNN);
	
	if(FirstempOp== "+")
    {
	  var tempcur=Number(current)
	  tempcur=tempNN+NowNN;
	  //alert(tempcur);
	}
	if(FirstempOp== "-")
    {
	  var tempcur=Number(current)
	  tempcur=tempNN-NowNN;
	  //alert(tempcur);
	}
    if(FirstempOp== "*")
    {
	  var tempcur=Number(current)
	  tempcur=tempNN*NowNN;
	  //alert(tempcur);
	}
	if(FirstempOp== "/")
    {
	  var tempcur=Number(current)
	  tempcur=tempNN/NowNN;
	  //alert(tempcur);
	}
	
   current=tempcur.toString();
    //alert(current)
    render();
    //alert(current);
	
})
})