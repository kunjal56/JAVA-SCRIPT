#include<stdio.h>

// 	Q6. Write a program that generates a multiplication table for a number entered by the user. The table should include values from 1 to 10 for that number using a "for" loop.

main(){
	
	int a,b;
	
	printf("Entre any number = ");
	scanf("%d",&b);
	
	for(a=1;a<=10;a++){
		printf("%d X %d = %d\n",b,a,a*b);
	}
}
