#include<bits/stdc++.h>
using namespace std;
int main ()
{
    int n;
    cout<<"enter the number to check the divisors";
    cin>>n;
    int div;
    for(int i=1;i<=n;i++)
    {
if(n%i==0)
{
    cout<<i<<endl;
}
    }

}