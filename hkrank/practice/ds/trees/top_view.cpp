/*
struct node
{
    int data;
    node* left;
    node* right;
};

*/

void side_view(node* root, int is_left){
    if(root == NULL) {
        return;
    }
    
    if(is_left == 0) {
        side_view(root->left, 0);
        cout<<root->data<<" ";
    } else {
        cout<<root->data<<" ";
        side_view(root->right, 1);        
    }
}

void top_view(node * root)
{
    if(root == NULL) {
        return;
    }
    
    side_view(root->left, 0);
    cout<<root->data<<' ';
    side_view(root->right, 1);
}