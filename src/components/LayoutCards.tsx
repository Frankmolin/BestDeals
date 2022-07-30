import React from 'react'

function LayoutCards({children}:React.PropsWithChildren) {
  return (
    <div className="m-4 row justify-content-center row-cols-1 row-cols-sm-4 row-cols-md-4 row-cols-lg-5 g-3">
        {children}
    </div>
  )
}

export default LayoutCards