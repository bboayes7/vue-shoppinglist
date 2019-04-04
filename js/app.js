var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        header: 'Shopping list app',
        newItem: '',
        items: [
            '10 party hats',
            '2 board games',
            '20 cups',
        ],
    },
    methods:{
        addItem: function(){
            if(!this.newItem)
                return
            
            this.items.push(this.newItem);
            this.newItem = '';
        }
    }
})