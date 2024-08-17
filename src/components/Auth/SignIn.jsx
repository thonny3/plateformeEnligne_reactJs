import React, { useState } from 'react';
import Header from '../publicPage/Header';
import study from '../../assets/study.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let formErrors = { email: '', password: '' };
    let isValid = true;

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = 'Veuillez entrer une adresse email valide.';
      isValid = false;
    }

    // Vérifier la longueur du mot de passe
    if (password.length < 4) {
      formErrors.password = 'Le mot de passe doit comporter au moins 4 caractères.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Logique de soumission si le formulaire est valide
      console.log('Formulaire validé');
    }
  };

  return (
    <>
      <Header />
      <section className="mt-5 flex items-center justify-center">
        <div className="bg-white flex rounded-2xl max-w-3xl p-5 w-full">
          <div className="w-1/2">
            <h2 className="text-center font-bold text-2xl">
              Connectez-vous <br />à <br /> votre compte
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1 mx-5">
              <input
                type="text"
                placeholder="Email"
                className={`p-2 mt-8 border ${errors.email ? 'border-red-500' : 'border-gray-300'} outline-none`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              
              <input
                type="password"
                placeholder="Mot de passe"
                className={`p-2 mt-5 border ${errors.password ? 'border-red-500' : 'border-gray-300'} outline-none` }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              
              <button type="submit" className="bg-[#40d3e1] text-white px-6 py-2 rounded mt-3">
                Se connecter
              </button>
            </form>
            <a href="" className="text-sm font-bold text-indigo-700 text-center mt-3 flex justify-center">
              Mot de passe oublié
            </a>
            <div className="text-sm mt-3 flex justify-center">
              <p>Vous n'avez pas de compte ? </p>
              <a href="" className="text-indigo-700 font-bold underline">S'inscrire</a>
            </div>
          </div>
          <div className="w-1/2">
            <img src={study} alt="Study illustration" />
          </div>
        </div>
      </section>
    </>
  );
}
