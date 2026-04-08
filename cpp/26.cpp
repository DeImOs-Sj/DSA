#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    // cout<<"Enter the digit";
    cin>>n;
    int last;
    int count=0 ;
    while(n>0)
    {
    last= n % 10;
    count=count+1;

    n=n/10;
    }
    cout<<count;
    return 0;
}