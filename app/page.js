import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <h1 className='font-bold '>CALCUL DU MILIEU DES VACANCES</h1>

      <div id='principaldiv' className="w-screen mt-9" style={{ display: 'flex', height: '110vh', border: '1px solid gray', padding: '0' }}>
        <section style={{ flex: 1 , padding: '3%'}} className="flex flex-col justify-center">
          <h1 className='font-bold tracking-wide  leading-relaxed mt-20 mb-6 font-playfair-thin'>CET OUTIL CALCULERA LA MOITIE DES VACANCES</h1>
          <p className='text-[#635E5A] mt-9'>Régulièrement lors des séparations ou des jugements de divorce, les enfants sont confiés à un parent pendant une moitié des vacances, puis à l'autre parent pendant l'autre moitié. La question qui revient régulièrement : Quel est le jour des milieux des vacances scolaires ?</p>

          <div className="flex items-center space-x-5 mt-20">
            <label className="text-[#C74300]" htmlFor="dateDebut">Date de début des vacances :</label>
            <div className="flex items-center">
              <input className='custom-input bg-transparent' type="date" id="dateDebut" name="dateDebut" />
            </div>

            <label htmlFor="heureDebut"></label>
            <input className='custom-input bg-transparent' type="time" id="heureDebut" name="heureDebut" />
          </div>

          <div className="flex items-center space-x-4 mt-9">
            <label className="text-[#C74300]" htmlFor="dateFin">Date de la fin des vacances : &nbsp;  </label>
            <div className="flex items-center">
              <input className='custom-input bg-transparent' type="date" id="dateFin" name="dateFin" />
            </div>

            <label htmlFor="heureFin"></label>
            <input className='custom-input bg-transparent' type="time" id="heureFin" name="heureFin" />
          </div>

          <div className="flex justify-center mt-9">
            <button className="bg-[rgba(199,67,0,0.3)] border border-[#C74300] text-[#C74300] hover:bg-[rgba(199,67,0,0.5)] hover:border-[#C74300] m-4 hover:text-[#C74300] py-4 px-14
  rounded btnn">
              CALCULER
            </button>
            





      
            
          </div>

          <p className='text-[#635E5A] mt-20'>Cet outil tient compte des heures d'été/hiver, des années bissextiles, etc.... </p>
          <p className='text-[#635E5A] mt-5 mb-10'>Souvent il est recommandé de prendre les dates des vacances de l'académie où est scolarisé l'enfant. Elles peuvent différer de celles de l'académie où vous résidez. Si vous avez un doute, vous pouvez consulter le site officiel du Ministère de l'Éducation Nationale.</p>
        </section>

        <section style={{ flex: 1 }}>
          <img src="p.png" alt="Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </section>

        <div id="resultContainer" className="text-[#C74300] bg-[rgba(199,67,0,0.3)] border border-[#C74300] py-2 px-2 rounded font-bold text-xl text-center" style={{ position: 'absolute', top: '70%', left: '78%', transform: 'translate(-60%, -50%)', zIndex: 9999,   }}></div>

        



      </div>
      <p  className="text-[#C74300] pt-3" >Cet outil est un service gratuit pour les utilisateurs et les personnes concernées. Sa maintenance et sa mise à jour pourrait être financée par des bannières de publicités. Merci de votre compréhension</p>

      <script dangerouslySetInnerHTML={{
        __html: `
          const calculateHalfDuration = () => {
            
          };

          document.addEventListener('DOMContentLoaded', function() {
            const startDateInput = document.getElementById('dateDebut');
            const startTimeInput = document.getElementById('heureDebut');
            const endDateInput = document.getElementById('dateFin');
            const endTimeInput = document.getElementById('heureFin');
            const calculateButton = document.querySelector('.btnn');

            calculateButton.addEventListener('click', calculateHalfDuration);

            function calculateHalfDuration() {
              const startDate = new Date(startDateInput.value + 'T' + startTimeInput.value);
              const endDate = new Date(endDateInput.value + 'T' + endTimeInput.value);

              if (isNaN(startDate) || isNaN(endDate)) {
                alert('Veuillez sélectionner vos dates et vos horaires  ');
                return;
              }

              const duration = endDate - startDate;
              const halfDuration = duration / 2;

              const middleDate = new Date(startDate.getTime() + halfDuration);

              const resultContainer = document.getElementById('resultContainer');
              resultContainer.innerText = 'Le milieu des vacances est le : ' + middleDate.toLocaleString();
            }
          });
        `
      }}></script>


    </main>
  );
}
