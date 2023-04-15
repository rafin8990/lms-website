import React from 'react';

const ModuleSelector = ({ modules, onModuleSelect }) => {
    return (
        <div>
            <select onChange={(e) => onModuleSelect(modules[e.target.value])}>
                {modules.map((module, index) => (
                    <option key={module.name} value={index}>
                        {module.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModuleSelector;