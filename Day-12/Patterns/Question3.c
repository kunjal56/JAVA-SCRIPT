#include<stdio.h>

// Q.3 Write a program that prints the first 10 multiples of a given number entered by the user using a "do-while" loop.

main(){
	
	int a=1,b;
	
	printf("Entre any number = ");
	scanf("%d",&b);
	
	do{
		printf("%d X %d = %d\n",b,a,a*b);
		
		a++;
	}
	while(a<=10);
}
