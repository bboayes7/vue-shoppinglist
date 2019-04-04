var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        header: 'Shopping list app',
        newItem: '',
        items: [
            {
                id: 0,
                label: '10 party hats',
                purchased: true
            },
            {
                id: 1,
                label: '2 board games',
                purchased: false
            },
            {
                id: 2,
                label: '20 cups',
                purchased: true
            }
        ],
        messageArchive: 'archive this item'
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
                id: this.items.length,
                label: this.newItem,
                purchased: false
            });
            this.newItem = '';
        },
        togglePurchased: function(item){
            item.purchased = !item.purchased;
        },
        deleteItem: function(deletedItem){
            this.items = this.items.filter(item => item !== deletedItem)
        },
        checkboxToggled(item){
            if(item.purchased){
                return 'far fa-check-square'
            } else{
                return 'far fa-square'
            }
        }
    }
})