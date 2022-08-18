import checkBoxStyle from './style'

export default function Checkbox ({checked, id, text}) {
    return (
        <div className="check-container">
            <input id={id} type="checkbox" checked={checked} readOnly/> 
            <label htmlFor={id} style={{textDecorationLine: checked ? 'line-through' : 'none' }}>{text}</label>

            <style jsx>
                { checkBoxStyle }
            </style>
        </div>
    );
}
