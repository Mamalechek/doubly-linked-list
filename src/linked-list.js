const Node = require('./node');

class LinkedList {
    constructor() {
     this.length = 0;
     this._head = null;
     this._tail = null;        
     }
    
    Node(data)
    {
     this.data = data;
     this.next = null;
     this.prev = null;
    }
    
    append(data) {
     var node = new Node(data);

     if(!this.length) {
        this._head = node;
        this._tail = node;
     }
     else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
     }
     this.length++;
     return this;
    }

    head() {
     if(this._head)
        return this._head.data;
     else return null;
    }

    tail() {
     if(this._tail)
        return this._tail.data;
     else return null;
    }

    at(index) {
     var count = 0, currentPos = this._head;
     
     if(index >= 0 && index < this.length) {
        while(count<index) {
            currentPos = currentPos.next;
            count++;
        }
        return currentPos.data;
     }
    }

    insertAt(index, data) {
     var count = 0, currentPos = this._head;
     if(this._head) {
      if (index === 0) 
       this._head.data = data;
      else if(index === this.length-1)
       this._tail.data = data;
      else
       if(index < this.length && index > 0) {
        while(count<index) {
            currentPos = currentPos.next;
            count++;
        }
        currentPos.data = data;
       }
     }
     else 
      this.append(data);     
     return this;
    }

    isEmpty() {
     if(!this.length) return true;
     else return false;
    }

    clear() {
     for(var i = this.length; i > 1; i--) {
      var currentPos = this._tail.prev;
        currentPos.next = null;
        this._tail = null;
        this._tail = currentPos;
        this.length--;   
       }    
     this.length = 0;
     this._head = null;
     this._tail = null;
     return this;
    }

    deleteAt(index) {
     if(index === 0) {
        this._head = this._head.next;
        if(!this._head)
            this._tail = null;
        else
            this._head.prev = null; 
     }
      else
      if(index === this.length) {
        this._tail = this._tail.prev;
        this._tail.next = null;
      }
      else
       if(index > 0 && index < this.length -1) {
        var count = 0, currentPos = this._head, 
            beforePos = null, afterPos = null;
        while(count < index) {
         currentPos = currentPos.next;
         count++;
        }
        beforePos = currentPos.prev;
        afterPos = currentPos.next;
        beforePos.next = afterPos;
        afterPos.prev = beforePos;
        currentPos = null;
      }
      else return -1;
     this.length--;
     return this;
    }

    reverse() {
     var count = 0, arr = [], currentPos = this._head;
     while(count < this.length) {
        arr.push(currentPos.data);
        currentPos = currentPos.next;
        count++;
     }
     currentPos = this._tail;
     while(count) {
        currentPos.data = arr[this.length-count];
        currentPos = currentPos.prev;
        count--;
     }
     return this;
    }

    indexOf(data) {
     var count = 0, currentPos = this._head;
     while(count < this.length) {
        if(currentPos.data == data)
            return count;
        currentPos = currentPos.next;
        count++;
     }
     return -1;
    }
}

module.exports = LinkedList;


            