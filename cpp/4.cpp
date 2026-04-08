#include<bits/stdc++.h>
using namespace std;
int main ()
{
    int x;
    cout<<"Enter the age"<<endl;
    cin>>x;
    if(x<18)
    {
        cout<<"Not eligible for job";
    }
    else if (x>=18 && x<=54)
    {
        cout<<"eligible for job";

    }

 else if (x>=55 && x<=57)
    {
        cout<<"eligible for job, but retirement soon";

    }
    else if(x>57)
    {
        cout<<"Retirement Time";
    }
}