# Linked-list

## Node Class 만들기

```py
# 1. Node는 Value와 next address를 갖는다.
class Node:
    def __init__(self, value = 0, next = None):
        self.value = value
        self.next = next

# Node 생성하기
num1 = Node(1)
num2 = Node(2)
num3 = Node(3)

# next에 다음 노드의 주소를 저장한다.
num1.next = second
num2.next = third

# num1의 value값 1을 101로 바꾼다.
num1.value = 101
```

## Linked List Class 만들기

- tail없이 head만을 이용해 single linked list를 만들어보자.
- 만들 함수
  - `get_size()`: 현재 linkedlist의 길이를 반환
  - `search()`: 현재 idx 위치의 값을 반환
  - `insert()`: idx 위치에 새 노드를 추가
  - `delete()`: idx 위치에 있는 노드 삭제

```py
class Node:
    def __init__(self, value = 0, next = None):
        self.value = value
        self.next = next

class LinkedList(Object):
    def __init__(self): # head가 첫번째 노드를 가리켜야 한다. # main
        self.head = None

    def get_size(self):
        if self.head is None:
            return 0
        else:
            cnt = 1
            current = self.head
            while(current.next):
                current = current.next
                cnt += 1
            return cnt

    def search(self, idx): # O(n)
        current = self.head # head에 접근한다.
        for _ in range(idx): # 원하는 index로 이동한다.
            current = current.next
        return current.value

    def append(self, value): # insert_back(), O(n)
        new_node = Node(value)
        if self.head is None: #
        head가 가리키는 값이 없다면
            self.head = new_node # head가 첫번째 노드의 주소값을 가리키게끔 한다.
        else: # 맨 뒤의 Node가 new_node를 가리키게끔 한다.
            current = self.head # 마지막 node에 접근하려면 head로부터 타고 넘어가야하므로, current가 head가 가리키는 곳을 가리키게끔 한다.
            while(current.next): # current의 next 노드가 none이 될때까지 타고 넘어간다.
                current = current.next # current의 next가 가리키는 곳으로 이동
            current.next = new_node # 마지막 노드를 new_node로 연결한다.

    def insert(self, idx, value):
        new_node = Node(value)
        preNext = self.head
        for _ in range(idx-1):
            preNext = preNext.next
        new_node.next = preNext.next
        preNext.next = new_node

    def delete(self, idx):
        current = self.head
        preNext = None
        for _ in range(idx+1):
            if _ == idx-1:
                preNext = current.next
            current = current.next
        preNext.next = current.next

# -----------------------------------------------------------------------
# 노드 삽입 (맨 뒤에)
linkedList = LinkedList() # LinkedList 호출. 헤드는 None값을 가리키게 된다.
linkedList.append(1) # 헤드가 첫번째 노드를,
linkedList.append(2) # 첫번째 노드는 두번째 노드를 가리킨다.
linkedList.append(3)
linkedList.append(4)

# idx에 있는 Node의 Value 가져오기
linkedList.search(0)
linkedList.search(2)

# 중간에 insert하기
linkedList.insert(idx = 3, value = 7)

# 특정 위치에 있는 값 삭제하기
linkedList.delete(2)

```
