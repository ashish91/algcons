using System; 
using System.Numerics;
class MyClass {
    static void Main(string[] args) {
        int test_cases = Int32.Parse(System.Console.ReadLine().Trim()), open = 0, close = 0;
        string paren;
        for (var i = 0; i < test_cases; i++) {
        	paren = System.Console.ReadLine().Trim();
        	open = 0;
        	close = 0;
            
            foreach (char p in paren)
			{
			    switch(p){
			    	case '(':
			    		open++;
			    		break;
			    	case ')':
			    		if(open > 0) open--;
			    		else close++;
			    		break;
			    }
			}
			
		 	System.Console.WriteLine((new String('(', close)) + paren + (new String(')', open)));
        }

       
    }
}
