export default function SplitData(Word){
    var Arr = Word.split('\n');
    var Name = Arr[0].split(' ')[2];
    var Data_chat = [];
    var Adding = (index)=>{
        Data_chat.push({
            date:Arr[i].split(' ')[1],
            person:Arr[index].split('\t')[1],
            context:Arr[index].split('\t')[2]
        });
    }


    for(var i=3;i<Arr.length;i++){
        
        var j=i+1,k=j;
        while(true){

            if(j==Arr.length-1 || (Arr[j]=="" && (Arr[j+1][5]=="/" || Arr[j+1][6]=="/")) ){
                if(j!=Arr.length-1)
                    Adding(j-1);
                i=j;
                break;
            }
            else if(Arr[j]==""){
                Arr[k]+='\n'+Arr[j];
            }


            if(Arr[j][2]!=":"){
                Arr[k]+='\n'+Arr[j];
            }
            else
            {
                //console.log(Arr[k]+"\n===\n");
                Adding(k);
                k=j;
            }
            j++;
        }
    }
    return {Name:Name,data:Data_chat};
}