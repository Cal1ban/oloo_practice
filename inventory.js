inventory

IF ITEM IN

inventory = {

  items:anItem;

}

THEN

ITEM.doSomething()

This will be an interface FYI, so each weapon will have an 'attack' interface.
each item will have a 'use' interface etc.

Interface in this context means all items will wrap their unique actions or whatever inside an interface/common method


specialItem {

use = use(){
  someActions()
  someOtherActions()
  whateverReally()
  }
}

anotherSpecialItem

use = use(){
  differentActions()
  totallyDifferentActions()
  butCalledByTheSameInterfaceMethod()
}

That way you can easily use an item in any context by just saying

inventory.anotherSpecialItem.use(SOME_CONTEXT_OR_WHATEVER)

inventory.specialItem.use(DIFFERENT_CONTEXT_OR_EVEN_THE_SAME)
