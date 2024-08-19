import React from 'react'
import studySignUp from '../../assets/studySignUp.png'
import { Link } from 'react-router-dom'
export default function Registre() {
  return (
    <>
        <section className='mt-5 flex items-center justify-center'>
        <div className='bg-white flex rounded-2xl max-w-3xl p-5 w-full'>
            <div className='w-1/2'>
                <h2 className='text-center font-bold text-2xl'>Inscrivez-vous  et commencez à  apprendre</h2>
                <form action="" className='flex flex-col gap-1 mx-5'>
                    <input type="text" placeholder='Nom complet' className='p-2 mt-5 border' />
                    <input type="text" placeholder='Email' className='p-2 mt-5 border' />
                    <input type="password" name="" id="" placeholder='Mot de passe' className='p-2 mt-5 border' />
                    <button className='bg-[#40d3e1] text-white px-6 py-2 rounded mt-3'>S'inscrire</button>
                </form>
                <div className='text-sm mt-3 flex justify-center'>
                    <p>Vous avez  dejà une compte ? </p>
                    <a href="" className='text-indigo-700 font-bold  underline'><Link to="/connexion">Se connecter ici</Link> </a>
                </div>
            </div>
            <div className=' w-1/2'>
              <img src={studySignUp} alt="" srcset="" />
            </div>
        </div>
    </section>
    </>
  )
}
