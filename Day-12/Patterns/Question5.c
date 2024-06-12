#include<stdio.h>

// Q.5 Create a program that calculates the factorial of a number entered by the user using a "for" loop.

main(){
	
	int a,b,c=1;
	
	printf("Entre any number = ");
	scanf("%d",&b);
	
	for(a=1;a<=b;a++){
		c=c*a;	
	}
		printf("factorial of %d is : %d",b,c);
}
