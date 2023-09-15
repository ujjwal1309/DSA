let c1=l1;
let c2=l2;
let l3=null;
let c3=l3;
let carry=0;
while(c1 || c2){
    if(c1 && c2){
        let sum=c1.val+c2.val+carry;
        carry=Math.floor(sum/10);
        let data=sum%10;
        if(!c3){
            l3=new ListNode(data);
            c3=l3;
        }else{
            c3.next=new ListNode(data);
            c3=c3.next;
        }
        c1=c1.next;
        c2=c2.next;
    }else if(c1){
        let sum=c1.val+carry;
        carry=Math.floor(sum/10);
        let data=sum%10;
        if(!c3){
            l3=new ListNode(data);
            c3=l3;
        }else{
            c3.next=new ListNode(data);
            c3=c3.next;
        }
        c1=c1.next;
    }else{
        let sum=c2.val+carry;
        carry=Math.floor(sum/10);
        let data=sum%10;
        if(!c3){
            l3=new ListNode(data);
            c3=l3;
        }else{
            c3.next=new ListNode(data);
            c3=c3.next;
        }
        c2=c2.next;
    }
}

return l3