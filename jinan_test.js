class jinan_site{
	constructor(){
		if(document.URL =="http://jaq.fuzhou.gov.cn/xjwz/zwgk/zfxxgkzdgz/hjbh/hjjc/"){
			this.is_index = false;
		}
		else{
			this.is_index = true
		}
	}
	get content(){
		if(this.is_index){
			return [];
		}
		else{
		      
		    var divList = {};
		    var ulList = {};
		    var liList = {};
		    var res = [];
		      
			divList =  document.getElementsByClassName("zxghdiv");			
			
			for(let i=3;i<=divList.length-1;i++){
                ulList = divList[i].getElementsByTagName("ul");
                liList = ulList[0].getElementsByTagName("li");
               
                for(let  j=0;j<liList.length;j++){
                    var temp = {};
                    temp.date = liList[j].children[0].textContent;
                    temp.url = liList[j].children[1].href;
                    temp.title = liList[j].children[1].textContent;

                    res.push(temp);
                }

			}
					
			}

			return res;
	
		}
		get goNextPage(){
		
		var flag = 1;
		var bar = [];
		 bar = document.getElementsByClassName("ymymym pgStyle")[0].children;
        	if(bar[8].className == "disab"){
        		flag = 0;
        	}else{
        		bar[7].click();
        	}					
       return flag;
		
		}

	}

