import Swal from 'sweetalert2'

export const showSuccess = (title: string, text?: string) => {
  Swal.fire({
    icon: 'success',
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  })
}

export const showError = (title: string, text?: string) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
  })
}

export const showConfirm = (
  title: string,
  text: string,
  onConfirm: () => void
) => {
  Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'ตกลง',
    cancelButtonText: 'ยกเลิก',
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
    }
  })
}