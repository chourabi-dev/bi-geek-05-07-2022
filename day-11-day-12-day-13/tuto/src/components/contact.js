export default function ContactElement(props){ 
    console.log(props);
 
    return(
       <div>
            {
                props.codeContact != null   
                
                ? 

                <div>
                    <h3 className={ props.year > 2010 ? 'new' : 'old' } >{ props.title }</h3>
                    <p>
                        <small>{props.email}</small>
                    </p> 
                    
                </div>
                :
                <div>
                    { props.title } dosn't have a contact code
                </div>
            }
       </div>
    );
}