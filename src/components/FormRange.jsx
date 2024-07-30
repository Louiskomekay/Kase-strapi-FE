import { formatPrice } from "../utils";
import { useState } from "react";
import styled from "styled-components";

const FormRange = ({ label, name, labelClassName, inputClassName, intervalClassName, Price }) => {
    const step = 250
    const maxPrice = 10000;
    const [selectedPrice, setSelectedPrice] = useState(Price || maxPrice);

    return (
        <Wrapper>
            <div className="formControl">
                <label htmlFor={name} className={labelClassName}>
                    <span>{label}</span>
                    <span>{selectedPrice}</span>
                </label>
                <input
                    type="range"
                    name={name}
                    min={0}
                    max={maxPrice}
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    step={step}
                    className={inputClassName}
                />
                <div className={intervalClassName}>
                    <span>0</span>
                    <span>{maxPrice}</span>
                </div>
            </div>
        </Wrapper>
    )
}

export default FormRange;

const Wrapper = styled.div`
    
`