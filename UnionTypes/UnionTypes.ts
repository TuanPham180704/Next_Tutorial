type Status = 'loading' | 'success' | 'error' | 'pending'

function  printStatus(s : Status) {
   console.log(s)
}

printStatus("success") // Ok
//printStatus("warn") lỗi vì nó không được định nghĩa trong UnionTypes
