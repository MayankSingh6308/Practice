public class conditions{
    public static void main(String[] args) {
        int salary = 20000;
        // if(salary>10000){
        //     salary =salary+2000;
            
        // }
        // else{
        //     salary = salary+1000;
        // }
        // multipple eif else
            if(salary>10000){
            salary =salary+2000;
            }
            else if(salary>20000){
            salary = salary+3000;
            }
            else{
                salary+=1000;
            }
        System.out.println("The salary is "+salary);
    }
}