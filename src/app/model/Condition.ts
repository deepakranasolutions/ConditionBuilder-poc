import { ConditionObject } from './ConditionObject';

export class Condition {
    id: string;
    name: string;
    conditionAction: any;
    conditionResult: any;
    masterBox: SubConditionBox = new SubConditionGroupBox();
    
    getBoxes(): Array<SubConditionBox> {
        return this.masterBox.getBoxes();
    }

    addOuterGroup(): void{
        let newMasterBox: SubConditionGroupBox = this.buildNewGroupBoxWithoutLeafBox();
        let newSubBox: SubConditionGroupBox = this.buildNewGroupBoxWithLeafBox();

        newMasterBox.addChildBox(this.masterBox);
        newMasterBox.addChildBox(newSubBox);
        
        this.masterBox = newMasterBox;
    }

    addSubCondition(sc: SubCondition, box: SubConditionBox): void {
        (<SubConditionLeafBox>box).addSubCondition(sc);
    }

    removeSubCondition(box: SubConditionBox, subCondition: SubCondition): void {
        //let leafBox = <SubConditionLeafBox>this.findBox(box.id, this.masterBox);
        (<SubConditionLeafBox>box).removeSubCondition(subCondition);
        this.removeBoxIfEmpty((<SubConditionLeafBox>box));
    }

    addNewBox(parentBox: SubConditionBox, box: SubConditionBox): void{
        console.log('adding child ' + box.id + ' to parent ' + parentBox.id);
        parentBox.addChildBox(box);
    }

    buildNewGroupBoxWithLeafBox(): SubConditionGroupBox {
        let groupBox: SubConditionGroupBox = new SubConditionGroupBox();
        //group box must have aleast one leaf box
        groupBox.addChildBox(this.buildNewLeafBox());
        return groupBox;
    }

    buildNewGroupBoxWithoutLeafBox(): SubConditionGroupBox {
        let groupBox: SubConditionGroupBox = new SubConditionGroupBox();
        return groupBox;
    }

    buildNewLeafBox(): SubConditionLeafBox {
        let leafBox: SubConditionLeafBox = new SubConditionLeafBox();
        //leaf box must have atleast one subcondition
        let sc: SubCondition = new SubCondition();
        leafBox.addSubCondition(sc);
        return leafBox;
    }

    removeBoxIfEmpty(box: SubConditionBox){
        let parent: SubConditionBox = box.parent;
        console.log('box - ' + box.id + ' || parent - ' + parent.id);
        //if there is no sub conditions in this box, remove this box
        if(box.isLeafBox()){
            if((<SubConditionLeafBox>box).getSubConditions().length == 0){
                console.log('removing child from parent - ' + parent.id);
                (<SubConditionGroupBox>parent).removeChildBox(box);
            }
        }else{
            if((<SubConditionGroupBox>box).getBoxes().length == 0){
                console.log('removing child from parent - ' + parent.id);
                (<SubConditionGroupBox>parent).removeChildBox(box);
            }
        }
        this.removeBoxIfEmpty(parent);
    }

    private findBox(findId: string, inBox: SubConditionBox): SubConditionBox{
        console.log('looking [ '  + findId + ' ] into box - ' + inBox.id);
        if(inBox.isLeafBox()){
            if(findId === inBox.id){
                console.log('found and returing leaf box...')
                return inBox;
            }
        }else{
            //for(var i = 0; i < inBox.getBoxes().length; i++ ){
            for(let box of inBox.getBoxes()){
                //let box = inBox.getBoxes()[i];
                if(findId === box.id){
                    console.log('found and returing group box...')
                    return box;
                }
                console.log('calling myself again for box - ' + box.id);
                this.findBox(findId, box);
            }
        }
        console.log('not able to find box - ' + findId + '. In parent box -' + inBox.id);
    }

    constructor(){
        this.id = 'Con:'+ IdGenerator.getNewId();

        //initialize condition
        let sc: SubCondition = new SubCondition();
        let leafBox: SubConditionLeafBox = new SubConditionLeafBox();
        leafBox.addSubCondition(sc);

        this.masterBox.addChildBox(leafBox);
    }


}

export abstract class SubConditionBox{
    id: string;
    displayId: string;
    join: any;
    parent: SubConditionBox;
    depth: number;
    abstract getBoxes(): Array<SubConditionBox>;
    abstract addChildBox(scb: SubConditionBox): void;
    abstract getChildrenCount(): Number;

    isLeafBox(): boolean {
        return false;
    }

    setJoin(value: any): void{
        console.log('for box [' + this.id + '] setting join to - ' + value);
        this.join = value;
    }

    protected cascadeChanges(box: SubConditionBox){
        for(let childBox of box.getBoxes()){
            childBox.depth = box.depth + 1;
            this.cascadeChanges(childBox);
        }
    }

    constructor(){
        let id = IdGenerator.getNewId();
        this.id = 'Box:'+ id;
        this.displayId = '' + id;
        this.depth = 0;
    }
}

export class SubConditionGroupBox extends SubConditionBox { 
    
    boxList: Array<SubConditionBox> = new Array<any>();

    getBoxes(): Array<SubConditionBox>{
        //console.log('G.getBoxes() called.Id-' + this.id + ' Len - ' + this.boxList.length);
        return this.boxList;
    }

    addChildBox(scgb: SubConditionBox): void {
        this.boxList.push(scgb);
        scgb.parent = this;
        this.cascadeChanges(this);

    }

    removeChildBox(scgb: SubConditionBox): void {
        for(var i = 0; i < this.boxList.length; i++){
            if(scgb.id === this.boxList[i].id){
                this.boxList.splice(i, 1);
            }
        }
    }

    getChildrenCount(): Number {
        return this.getBoxes().length;
    } 

    constructor(){
        super();
        this.id = this.id + '-GB';
    }

    
}

export class SubConditionLeafBox extends SubConditionBox {
    boxList: Array<SubConditionBox> = new Array<SubConditionLeafBox>();
    subConditionList: Array<SubCondition> = new Array<SubCondition>();

    getBoxes(): Array<SubConditionBox>{
        //console.log('L.getBoxes() called.Id-' + this.id + ' Len - ' + this.boxList.length);
        return this.boxList;
    }

    getSubConditions(): Array<SubCondition> {
        return this.subConditionList;
    }

    addChildBox(scgb: SubConditionBox): void {
        //do nothing
    }

    addSubCondition(sc: SubCondition): void {
        this.subConditionList.push(sc);
    }

    removeChildBox(scgb: SubConditionBox): void {
        for(var i = 0; i < this.boxList.length; i++){
            if(scgb.id === this.boxList[i].id){
                this.boxList.splice(i, 1);
            }
        }
    }

    removeSubCondition(sc: SubCondition): void{
        for(var i = 0; i < this.subConditionList.length; i++){
            if(sc.id === this.subConditionList[i].id){
                this.subConditionList.splice(i, 1);
            }
        }
    }

    getChildrenCount(): Number {
        return this.getSubConditions().length;
    }

    isLeafBox(): boolean {
        return true;
    }

    constructor(){
        super();
        this.id = this.id + '-LB';
    }
}

export class SubCondition {
    id: string;
    conditionObject: any;
    conditionOperator: any;
    conditionValue: any;

    constructor(){
        this.id = 'SC:' + IdGenerator.getNewId();
    }
    
}

class IdGenerator {
    private static idCounter: number = 0; 
    static getNewId(): number{
        this.idCounter = this.idCounter + 1;
        return this.idCounter;
    }
}

/*
import { ConditionObject } from './ConditionObject';

export class Condition {
    name: String;
    conditionAction: any;
    conditionResult: any;
    subConditionList: Array<Array<SubCondition>> = new Array<Array<SubCondition>>();

    addSubConditionGroup(scg: Array<SubCondition>): void {
        this.subConditionList.push(scg);
    }

    addSubCondition(scg: Array<SubCondition>, sc: SubCondition){
        scg.push(sc);
    }

    removeSubCondition(sc: SubCondition){
        for(var i = 0; i < this.subConditionList.length; i++){
            for(var j = 0; j < this.subConditionList[i].length; j++){
                if(sc.id === this.subConditionList[i][j].id){
                    this.subConditionList[i].splice(j, 1); //remove subCondition Object
                }
                if(this.subConditionList[i].length == 0){
                    this.subConditionList.splice(i, 1); //remove empty array
                }
            }
        }
    }

}

export class SubCondition {
    id: number;
    conditionObject: any;
    conditionOperator: any;
    conditionValue: any;

    constructor(){
        this.id = Date.now();
    }
    
}
*/