$(".ope").on('click', function()
	{

				tempOpe[i] = this.id;
				curText = curText + this.id;
				render();

				//輸入運算符號代表上個數值已輸入完成，因此將指標i指到下一個欄位
				i++;
			}
		}
		
	})


//按下計算鍵時的操作
	$("#calculate").on('click', function()
	{
		//將字串轉為數值形式
		for(var s=0;s<tempN.length;s++)
		{
			tempN[s] = Number(tempNum[s]);
		}

		//呼叫用來計算的函數
		calculator();

		//得到
		//結果後將指標i歸零，記錄下已顯示答案
		i = 0;
		//當運算發生錯誤，最後答案不是數值時提醒Error並清除
		if(isNaN(tempNum[i]) == true)
		{
			tempNum[i]=[];
			tempOpe[k]=[];
			i = 0;
			k = 0;
			current = "Error!";
		}
		else
		{
			current= tempN[i];
		}
		render();
	})

	//用來遞迴計算的函數
	function calculator()
	{
		//若運算中的符號是算式中最後面的，則不繼續往下比優先程度
		if(k+1 == tempOp.length)
		{
			//呼叫單次計算的函數
			calculate();
			//如果現在數值陣列有不止一個值（還沒算出答案）
			if(tempN.length != 1)
			{
				//將指標k往回移動
				k--;
				//遞迴呼叫自身，繼續計算下個步驟
				calculator();
			}
		}
//如果現在指標k指到的符號優先程度等於下一個
		else
		{
			//呼叫單次計算的函數
			calculate();

			//如果還有運算符號尚未被運算，就遞迴繼續運算
			if(tempOp.length != 0)
			{
				calculator();
			}
		}
	}

	//用來單次計算的函數
	function calculate()
	{
		//判斷現在指標k指到的符號是什麼，對它前後的數值做出相符的運算
		if(tempOp[k] == "+")
		{
			tempN[k] += tempN[k+1];
		}
		else if(tempOp[k] == "-")
		{
			tempN[k] -= tempN[k+1];
		}
		else if(tempOpe[k] == "×")
		{
			tempN[k] *= tempN[k+1];
		}
		else if(tempOp[k] == "÷")
		{
			tempN[k] /= tempN[k+1];
		}

		//將已運算完的數值（右邊的數值）與運算符號和優先度都清除，讓後面的補上來
		tempN.splice(k+1,1);
		tempOp.splice(k,1);
	}