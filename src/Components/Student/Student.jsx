export default function Student(props) {
    return (
      <div className='container p-4'>
        <div className='row border py-2'>
          <div className='col-2 '>
            <img src={`https://randomuser.me/api/portraits/${props.sex}/${props.userImg}.jpg`} alt='' className='w-5 rounded'/>
          </div>
          <div className='col-8 py-3 text-white'>{props.name}<br/>Coding Experience {props.experience} years</div>
          <div className="col-2">
            {props.children}
          </div>
        </div>
      </div>
    )
  }
  
  