var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'Shopping list app',
        newItem: '',
        items: [
            {
                label: '10 party hats',
                purchased: true
            },
            {
                label: '2 board games',
                purchased: false
            },
            {
                label: '20 cups',
                purchased: true
            }
        ],
    },
    computed: {
        reversedItems() {
            return this.items.slice(0).reverse();
        }
    },
    methods:{
        addItem: function(){
            if(!this.newItem){
                return;
            }
            this.items.push({
                label: this.newItem,
                purchased: false
            });
            this.newItem = '';
        },
        changeState: function(newState){
            this.state = newState;
            this.newItem = '';
        },
        togglePurchased: function(item){
            item.purchased = !item.purchased;
        }
    }
})