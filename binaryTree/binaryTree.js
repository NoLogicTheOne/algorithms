class BinaryTree {
    constuctor(val, root = null){
        this.root = root
        this.value = val
        this.left = null
        this.right = null
    }

    getValue() {
        return this.value
    }

    add(value){
        root = this.root
        
        if(!root){
            this.root = value
            return
        }

        

        if(Array.isArray(value)){

        } else {
            if(value >= this.value){
                if(this.right){
                    this.right.add(value)
                } else {
                    this.right = new BinaryTree(value, this)
                }
            }
        }
        return this
    }
}

module.exports = BinaryTree