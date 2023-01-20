// OJ Link - https://oj.masaischool.com/contest/2237/problem/3

class Queue{
    constructor() {
        this.array = [];
        this.front = 0;
        this.back = 0;
    }
    enqueue(elem){
        this.array[this.back++] = elem;
        // return this.back;
    }
    dequeue() {
        if(this.back == 0){
            return [-1, this.back].join(" ");
        }else{
            var front_element = this.array[this.front];
            for(var i = 0; i < this.back; i++){
                this.array[i] = this.array[i + 1];
            }
            this.back--;
        }
        // return [front_element, this.back].join(" ");
    }
    front(){
        return this.array[this.front]
    }
    isEmpty(){
        if(this.back === 0){
            return true;
        }
        return false;
    }
}

class Stack{
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push_(elem){
        // this.q1.enqueue(elem);
        if(this.q1.isEmpty()){
            this.q1.enqueue(elem);
        }else{
            while(!this.q1.isEmpty()){
                this.q2.enqueue(this.q1.front());
                this.q1.dequeue();
            }
            this.q1.enqueue(elem);
            while(!this.q2.isEmpty()){
                this.q1.enqueue(this.q2.front());
                this.q2.dequeue();
            }
        }
    }
    pop_(){
        this.q1.dequeue();
    }
    top_(){
        if(this.q1.isEmpty()) return -1;

        return this.q1.front();
    }
    isEmpty(){
        if(this.q1.isEmpty()) return true;

        return false;
    }
}