var removeNthFromEnd = function (head, n) {
  let safety = new ListNode(0);
  safety.next = head;
  let prevPointer = safety;
  let tailPointer = safety;

  for (let i = 0; i < n; i++) {
    tailPointer = tailPointer.next;
  }

  while (tailPointer.next) {
    tailPointer = tailPointer.next;
    prevPointer = prevPointer.next;
  }

  prevPointer.next = prevPointer.next.next;

  return safety.next;
};
