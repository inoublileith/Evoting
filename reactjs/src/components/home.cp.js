import React from 'react'
const Home = () => {
  
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
              <h4 className='mb-sm-0 font-size-18'>Acceuil</h4>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-24'>
            <div className='card card-h-100'>
              <div className='card-body' style={{ backgroundColor: '#f8f8f8' }}>
                <div className='d-flex flex-wrap align-items-center mb-4'>
                  <h5 className='card-title me-2'>E-Voting</h5>
                  <div className='ms-auto'>
                    <p className='mt-4' style={{ fontSize: 17 }}>
                      Le vote électronique consiste à utiliser les technologies
                      de l’informatique et des télécommunications dans le
                      processus de vote. Un dispositif (ordinateur, téléphone)
                      permet d’exprimer son vote et de compter automatiquement
                      l’ensemble des suffrages. Les avantages ainsi visés sont
                      les suivants : faciliter le vote et, ce faisant, augmenter
                      la participation aux élections, tout en rendant immédiats
                      leurs résultats. Voter partout, n’importe où, pourvu que
                      l’on vote, serait donc la clé du succès, celle de la
                      participation aux élections. Compter les suffrages
                      électroniquement devrait permettre une contraction du
                      temps et une simplification de l’organisation du scrutin.
                      L’articulation entre la signification de l’acte de vote,
                      les valeurs juridiques auxquelles il est attaché et ses
                      conditions d’exercice, devrait se subordonner aux règles
                      d’un management efficace.
                    </p>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
