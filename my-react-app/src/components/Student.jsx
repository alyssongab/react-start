import PropTypes from 'prop-types';

function Student({ nome, idade }) {

    const styleP = {
        color: 'red',
        fontSize: '20px'
    }

    return (
        <>
            <p style={styleP}>Nome: {nome} | idade: {idade}</p>
        </>
    );
}

Student.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number
}

Student.defaultProps = {
    nome: 'Não informado',
    idade: 0
}

export default Student;