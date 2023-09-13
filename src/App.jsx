import React from "react";
// import { Canvas } from "@react-three/fiber";
// import Experience from "./Components/Experience";
// import Sidebar from "./components/Sidebar";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from './pages/home';
// import Working from './pages/working';
import './App.css'


function App() {
  return (
    <body className="bg-white h-screen">
      <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-green-100">
          <a href="http://localhost:5173/" class="flex items-center p-2 bg-green-100">
              <span class="self-center text-4xl font-semibold whitespace-nowrap font-montserrat text-black">ROOM MAKER</span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-black text-2xl font-montserrat rounded hover:bg-green-200" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-black text-2xl font-montserrat rounded hover:bg-green-200">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-black text-2xl font-montserrat rounded hover:bg-green-200">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div>
        <p className="text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nostrum fuga assumenda officia voluptatum vero totam doloribus numquam id velit quod porro non ex magni omnis, inventore accusantium odit vel?</p>
        <p className="text-3xl">Molestiae ab deleniti facilis officia error architecto animi repellendus quas autem pariatur, quidem sed quae magni unde. Tempore aliquam repudiandae natus, ratione, quam laudantium nihil eaque quidem molestiae rem nam!</p>
        <p className="text-3xl">Ad id obcaecati officiis voluptatem, repudiandae porro modi sunt deserunt soluta est tempora animi consequuntur, sed, minus hic provident repellendus cumque quibusdam. Deserunt sit minus velit. Delectus quo exercitationem doloremque.</p>
        <p className="text-3xl">Officiis vero at minima neque, cum natus doloribus. Ipsam aspernatur accusantium sint impedit fugit sunt dolorem quis, dignissimos qui culpa sequi cum tenetur cumque fuga commodi ad ducimus. Neque, ipsam.</p>
        <p className="text-3xl">Labore molestias facere, voluptate necessitatibus qui dolorem! Cupiditate nesciunt reprehenderit quasi enim sed. Libero rerum incidunt placeat natus quos quo pariatur odit? Eum, velit voluptate commodi dolore quam dolorem? Iure!</p>
        <p className="text-3xl">Earum hic quibusdam maiores consequuntur at laudantium explicabo iste tempore similique, natus eum iure optio provident vel tempora reiciendis. Nisi ipsam libero quo facere eaque maxime corrupti eius eligendi asperiores?</p>
        <p className="text-3xl">Id, dignissimos quia voluptates molestiae eaque commodi deserunt dolores! Accusantium laborum maiores sed repellat. Illo qui, et nobis, quam, aliquid facere eveniet praesentium omnis quibusdam rem id in neque animi?</p>
        <p className="text-3xl">Nesciunt eligendi ullam maiores voluptas aspernatur odio. Architecto nihil unde temporibus cupiditate reiciendis, necessitatibus commodi quasi quod illum rerum voluptatibus eius placeat iste itaque est? Reiciendis quasi aperiam doloribus ea!</p>
        <p className="text-3xl">Velit repudiandae sit fugiat delectus assumenda ratione, sunt quas dolor esse! Nulla laborum delectus a itaque quibusdam. Nihil nemo odio saepe, totam maxime repellat accusamus. Nobis necessitatibus blanditiis ipsa nostrum.</p>
        <p className="text-3xl">Eaque veritatis, cum fugiat quam doloribus asperiores maxime, enim quas optio aliquid nulla reprehenderit totam dolore temporibus. Ea sit accusamus, illo, totam magni qui quae unde corporis ut, iste repellendus.</p>
        <p className="text-3xl">Sed, obcaecati repellendus quis suscipit rerum consectetur laboriosam voluptatum quo, libero excepturi ducimus asperiores quisquam ab, in porro repudiandae ea dolorum! Excepturi error magni libero aliquid a. Ad, vel aliquid.</p>
        <p className="text-3xl">Mollitia sunt, modi hic fuga tempore ut? Delectus, ratione? Eligendi iusto eius deleniti asperiores, voluptas voluptates similique quaerat id doloremque soluta facere obcaecati laudantium reprehenderit expedita consectetur, accusantium ipsum cupiditate.</p>
        <p className="text-3xl">Dolor pariatur exercitationem facilis quidem non ex! Aut numquam quisquam doloribus et quia, sint nulla possimus, velit, qui sapiente illo iste sunt quo fugit magni fuga dicta eligendi quos aspernatur.</p>
        <p className="text-3xl">Mollitia distinctio illo cumque odio minima omnis quis totam laudantium fuga. Eius assumenda debitis unde sint perspiciatis. Accusantium ullam quas minus, porro fugiat recusandae earum aut asperiores sunt quam expedita.</p>
        <p className="text-3xl">Itaque dicta minima voluptas, vero sunt reiciendis? Alias, nam. Nostrum alias, autem a cupiditate culpa velit dolorum incidunt facere veniam dolore tenetur esse placeat reprehenderit iusto odit molestiae tempore recusandae?</p>
        <p className="text-3xl">Placeat, quae magnam reiciendis provident corrupti inventore labore nihil quisquam porro sequi quod blanditiis quasi explicabo dolore quos animi fugit odit? Laboriosam officiis odit ea veritatis iste ab alias incidunt?</p>
        <p className="text-3xl">Enim atque distinctio consequuntur, aperiam asperiores cum eos modi nemo assumenda quam hic odit repellendus similique dolores praesentium saepe rerum quos tempore, in tenetur doloribus maiores ullam! Optio, minus odit.</p>
        <p className="text-3xl">Ea neque tempore quasi rem perspiciatis pariatur inventore fugit quos, voluptate dolorum, quidem aperiam optio minus debitis dicta provident iure expedita? Commodi quasi maiores libero nemo reprehenderit itaque quibusdam aspernatur!</p>
        <p className="text-3xl">Quaerat rerum dignissimos possimus sint iure repellat praesentium libero sit at dolore, tenetur non ea commodi magni nulla facilis sunt voluptatibus fugit unde suscipit eveniet rem nemo aperiam? Veniam, quasi?</p>
        <p className="text-3xl">Sequi, tenetur explicabo. Expedita nobis ipsam eveniet corrupti natus repudiandae sapiente perferendis. Dolores accusantium, laborum soluta architecto nostrum, neque, tempora dolore assumenda ipsa eligendi aperiam! Aliquam rerum maiores nesciunt quod.</p>
        <p className="text-3xl">Inventore illo accusamus quasi distinctio vel nulla dolorum neque molestiae. Unde perspiciatis doloremque cumque quo autem cum natus non, quod nihil pariatur, magni debitis odit maxime nam provident sint vitae.</p>
        <p className="text-3xl">Consequatur, quod placeat dicta libero nam quasi delectus vero cumque dolor velit. Ea, eaque nihil optio quas quod voluptates natus harum officiis nam quidem saepe odio corporis pariatur veniam numquam.</p>
        <p className="text-3xl">Sint mollitia nobis expedita praesentium sunt possimus suscipit quae at odio incidunt, nesciunt eos minima. Laudantium nisi dignissimos accusamus quis, similique error quibusdam earum in dolorem, adipisci voluptatem dolorum doloremque.</p>
        <p className="text-3xl">Impedit natus dolor recusandae voluptatibus culpa ipsum veniam hic deserunt corrupti consequuntur delectus aliquid vero rem minus labore quas expedita, molestiae totam cumque. Aliquid, ex? Earum enim quod vitae voluptate.</p>
        <p className="text-3xl">Alias sapiente esse totam officia. Laboriosam eligendi eius perferendis iure voluptates odio atque voluptate adipisci a deleniti ad vero tempore mollitia, officia porro harum exercitationem labore velit nobis optio esse!</p>
        <p className="text-3xl">Voluptatibus eos tempore nesciunt, saepe cumque quas vitae exercitationem magni dolorum, deleniti sequi? Tempora a dolores odit, itaque optio omnis voluptatem repellat autem numquam perspiciatis quisquam ipsa, sunt quidem neque.</p>
        <p className="text-3xl">Voluptatum alias repudiandae ullam harum, sit eum laborum corporis, sunt, voluptates dolores eligendi illum necessitatibus fuga et excepturi labore incidunt. Nam sint laudantium, illo soluta maxime facere sequi praesentium saepe!</p>
        <p className="text-3xl">Sapiente eligendi rem impedit accusamus optio distinctio temporibus amet beatae nobis error, nemo reprehenderit delectus aut voluptatem vero ratione maxime quos, repudiandae laudantium fugiat placeat. Molestias cum earum dolores sequi.</p>
        <p className="text-3xl">Odit nemo modi vitae sint? Magni, sint modi voluptates quaerat repellat mollitia ea ipsam commodi officia magnam vitae. Esse impedit aspernatur perspiciatis voluptate ab saepe neque culpa adipisci quos itaque.</p>
        <p className="text-3xl">Quo natus velit recusandae facilis expedita. Nulla ipsa cupiditate maiores tempore? Nobis temporibus veritatis blanditiis ducimus ut magni quam odit. Ullam illo error vero sint nostrum? Sunt odio pariatur maxime!</p>
        <p className="text-3xl">Enim in excepturi facilis quas rem recusandae quae eos tempora at est. Tenetur officia recusandae ipsum nobis voluptas distinctio libero consectetur magnam, praesentium facere laudantium harum dolores delectus quod. Eveniet?</p>
        <p className="text-3xl">Sunt aut aliquam iure facere illo atque veniam, dignissimos similique tempore quo vel, fugiat architecto dolorem autem perspiciatis. Corrupti porro incidunt eos earum consequuntur fugiat nam eligendi pariatur distinctio aspernatur?</p>
        <p className="text-3xl">Assumenda porro praesentium animi quaerat quam dolores, aliquid, itaque omnis, fugit reiciendis velit corrupti nobis minima! Voluptatem id inventore quae molestiae maiores rerum accusantium, aliquid quis dolor ea nobis repellendus!</p>
        <p className="text-3xl">Consequuntur ipsam nobis dolorum delectus sunt magnam assumenda ea dolore necessitatibus dolor corporis a, quis neque impedit, illo rem voluptatibus. Commodi qui fugit nihil deleniti natus atque dignissimos mollitia adipisci.</p>
        <p className="text-3xl">Aut asperiores reiciendis, amet tempora, corrupti praesentium rem necessitatibus quasi consequatur, ducimus dicta. Ullam architecto molestiae eius soluta, incidunt ipsam, est quo quod voluptatibus ab earum, nesciunt cumque fugit nostrum!</p>
        <p className="text-3xl">Vitae aut doloremque molestiae recusandae quisquam quasi dicta, vero nobis culpa tempora, in quaerat odit? Deserunt rerum nisi dolorum ea ex iure impedit, explicabo recusandae aut ut omnis, et nostrum?</p>
        <p className="text-3xl">Accusantium cum incidunt odio mollitia. Error reiciendis quis provident animi. Neque rem eius officiis, dolorem eos recusandae incidunt possimus vitae necessitatibus illo repellendus. Quisquam id beatae cum quidem adipisci ad.</p>
        <p className="text-3xl">Tenetur accusamus doloribus magni pariatur! Dolorum officia vitae dolores molestiae laboriosam, sit, recusandae, nemo reiciendis non asperiores atque! Repudiandae ab iste veritatis explicabo tempora cum in repellat fugiat, aliquid provident.</p>
        <p className="text-3xl">Voluptates exercitationem a optio libero ad suscipit beatae aut illo culpa dolore hic est corrupti quas natus, sapiente iure odit voluptate blanditiis impedit incidunt debitis id iste veniam eum. Dolorem.</p>
        <p className="text-3xl">Quas, enim voluptatibus quam, consectetur laudantium cupiditate debitis omnis iusto repellat repellendus repudiandae et est nam, pariatur ullam veniam! Molestiae dicta qui blanditiis dolores aliquid cumque fugit, quasi assumenda ratione.</p>
        <p className="text-3xl">Sit nulla harum pariatur, voluptas dicta eveniet cum saepe cupiditate totam delectus, consequatur rem tempora exercitationem sunt assumenda enim quia ut fugit nisi? Unde, est facilis libero eveniet adipisci consequatur.</p>
        <p className="text-3xl">Quasi pariatur, dolorem impedit alias eos magni nulla possimus asperiores natus sit id eveniet. Architecto fugit beatae dolorem blanditiis corrupti, placeat autem. Aperiam esse itaque commodi corporis voluptatem culpa saepe.</p>
        <p className="text-3xl">Ducimus dicta praesentium laboriosam omnis facilis adipisci! Mollitia molestiae blanditiis unde magnam? Harum eaque ex veritatis ipsam voluptas, nam, quam, amet quibusdam temporibus nostrum laboriosam dignissimos. Eius fuga suscipit blanditiis!</p>
        <p className="text-3xl">Cum mollitia ratione nemo eum, unde officia, quis a culpa facere, consequuntur voluptatibus error commodi officiis alias ut quia rem rerum tenetur expedita dolores tempore! Saepe deleniti odio ex repellat?</p>
        <p className="text-3xl">Aperiam praesentium sapiente asperiores quasi expedita hic deleniti et ex in ipsam officiis necessitatibus illo illum harum unde autem exercitationem voluptatibus cupiditate, rerum natus velit magni tenetur iusto eos. Ab!</p>
        <p className="text-3xl">Odit sed esse, sequi dolore autem fugit ducimus labore temporibus rerum id aperiam quae, voluptatem alias impedit iste itaque ut tempora? Velit quos natus dicta nihil temporibus, atque sequi libero.</p>
        <p className="text-3xl">Dolore rerum vel deserunt accusantium minus minima tempore incidunt voluptatum, saepe totam nam sit illum id cum nesciunt sunt aliquid enim quae sequi eius nisi quisquam natus odio! Commodi, quae.</p>
        <p className="text-3xl">Cupiditate earum quam cum corrupti voluptas ipsa ipsum maiores a quisquam. Ipsum facere qui veritatis quibusdam. Mollitia tenetur temporibus, soluta, quaerat at sequi autem alias rerum, id debitis repellat cupiditate.</p>
        <p className="text-3xl">Quo tempora asperiores omnis provident ea reprehenderit eius, a corporis nam dignissimos modi, autem odio rem inventore nihil expedita cum explicabo corrupti. Inventore, quo laboriosam a cum explicabo quas quidem.</p>
        <p className="text-3xl">Eius unde, maiores quos sit, corrupti suscipit minus error necessitatibus commodi perspiciatis magni ipsa, assumenda tempora impedit voluptates itaque labore non obcaecati! Quaerat est, commodi iste rem temporibus dicta. Nostrum!</p>
        <p className="text-3xl">Atque minus maiores qui, doloribus fugiat vel sint distinctio eaque. Numquam aperiam ad deserunt eos odio aut, placeat amet beatae, nobis ipsum obcaecati? Inventore itaque, maiores ad quis voluptates perspiciatis!</p>
        <p className="text-3xl">Quod eum corrupti blanditiis similique minima sit earum laboriosam ab? Repudiandae voluptas fugit at necessitatibus itaque, nobis quis, corrupti, non quibusdam ipsam cupiditate rerum illo beatae molestiae! Itaque, ut facere.</p>
        <p className="text-3xl">Adipisci ex, magnam officiis ut rerum, similique necessitatibus excepturi soluta voluptatum sed porro dolorum eligendi, fuga non voluptate magni cupiditate exercitationem culpa ullam? Consequuntur quis mollitia quod. Quae, earum quos.</p>
        <p className="text-3xl">Officia quis odit corrupti natus iste. Obcaecati fuga in libero reiciendis, odio similique expedita enim. Corrupti mollitia repudiandae ab reprehenderit laborum quasi magnam debitis dicta, consequatur explicabo vero accusantium labore.</p>
        <p className="text-3xl">Voluptates, similique magnam! Minima asperiores voluptate molestias voluptatem non ducimus, harum excepturi perferendis similique laborum at ullam rerum est quae voluptatum et facilis laudantium! Dolores iusto ex facere inventore quibusdam.</p>
        <p className="text-3xl">Facilis deleniti reprehenderit, fuga voluptate quaerat quos odit amet possimus iste tempora praesentium, in, natus ipsum delectus rem repellendus. Incidunt perspiciatis nobis voluptatem excepturi et aut modi reiciendis commodi velit.</p>
        <p className="text-3xl">Repudiandae, qui at iure, vel cum corporis quidem omnis molestiae quis similique impedit quo error quia repellat nam voluptatibus blanditiis repellendus. Incidunt alias quam repudiandae. Ratione neque inventore enim quidem.</p>
        <p className="text-3xl">Ut molestias ullam tempore maxime totam corporis placeat! Similique, ab mollitia. Rem error amet laudantium totam repellat aperiam iste eius dolorum, dignissimos magni repellendus dolorem ratione! Ipsum illum natus harum?</p>
        <p className="text-3xl">Voluptas omnis ad, totam, quia sed molestias doloremque aspernatur nam eligendi quasi delectus dignissimos aliquam nulla dicta impedit, adipisci nostrum inventore explicabo commodi iure porro ut. Molestiae impedit expedita laborum.</p>
        <p className="text-3xl">Pariatur perferendis tenetur, nobis, consequatur excepturi blanditiis aspernatur modi quia dolorem delectus officia facere nihil quod eaque quisquam rerum. Optio error impedit exercitationem quam in, illum ipsa deleniti repudiandae? Eaque?</p>
        <p className="text-3xl">Ipsam, itaque. Earum ullam debitis beatae atque quod, cum quasi voluptate fuga, possimus reiciendis deserunt nostrum doloribus aperiam natus id quo vitae harum! Vitae aperiam, beatae ratione optio molestiae praesentium.</p>
        <p className="text-3xl">Eligendi corporis natus deleniti illo numquam laudantium ea officia ad magnam quod, et reiciendis labore deserunt? Molestias nobis qui, autem doloremque inventore iste molestiae, nam, quis necessitatibus saepe velit ea?</p>
        <p className="text-3xl">Laborum facilis officia illum aperiam! Facere sapiente, eos aperiam suscipit nulla eligendi fuga! Officia explicabo eos, sed assumenda, consequuntur voluptatem error hic itaque laborum, ex similique. Nam, consectetur provident? Magnam?</p>
        <p className="text-3xl">Praesentium cupiditate iste quis ipsa natus adipisci, inventore saepe quasi odio autem ut ipsum facere corporis necessitatibus. Quasi autem itaque, dolor hic odit quam fugiat quidem rerum iusto, nostrum harum!</p>
        <p className="text-3xl">Atque earum quis, similique eveniet, reiciendis et corporis amet dignissimos impedit exercitationem cupiditate veritatis maxime labore. Eligendi incidunt animi, et aperiam dolorem hic expedita itaque cupiditate, ullam soluta rerum totam!</p>
        <p className="text-3xl">Dicta, placeat. Alias fugiat, tempore ex veniam exercitationem eos praesentium nihil dolorum accusamus pariatur, accusantium saepe fuga autem deserunt modi reiciendis officiis? Fuga dicta molestiae, illo voluptatum nobis culpa consequuntur!</p>
        <p className="text-3xl">Vitae, animi ipsum. Iste cumque optio soluta? Quidem corrupti eos alias et eius. Ab possimus maxime delectus accusantium? Deserunt natus fugiat nisi sequi. Accusamus aut dolorum in aliquam adipisci distinctio.</p>
        <p className="text-3xl">Alias incidunt minus molestiae facilis mollitia quasi earum et nemo illo nihil dolorum quia ipsa, minima doloremque laborum quos a dicta fuga quis quibusdam corrupti numquam neque. Exercitationem, earum beatae?</p>
        <p className="text-3xl">Quod quidem vero autem quo dicta placeat dolore, libero magni ipsum quia animi eaque quibusdam officia velit iste voluptates nostrum hic voluptatem corrupti architecto? Delectus dolores rem sunt dignissimos facere?</p>
        <p className="text-3xl">Beatae officiis, nulla aliquam ut, expedita facere sequi iste deserunt placeat a alias deleniti aperiam dicta quisquam perferendis. Qui, incidunt ad! Totam quisquam dicta cumque voluptatum voluptatibus, labore dolorem ipsa.</p>
        <p className="text-3xl">Perferendis quo, repellat quisquam illo maxime natus numquam, nostrum sunt eaque fugit fuga enim sint ratione quaerat est sapiente adipisci? Eligendi dolores ratione officiis incidunt, voluptatum deleniti. Blanditiis, consequuntur aspernatur!</p>
        <p className="text-3xl">Aspernatur officia tempora natus nostrum dolorum ratione atque? Ratione obcaecati ut optio tenetur expedita quia rem commodi quas perferendis minus repudiandae consequatur, ad architecto suscipit magnam animi ipsa cumque mollitia.</p>
        <p className="text-3xl">Corrupti perspiciatis quaerat voluptatum nisi reiciendis facilis nihil temporibus ratione eum debitis quos magni tempore vel possimus enim deleniti voluptas laudantium beatae harum, voluptatibus laborum iusto ipsa voluptates id? Sapiente.</p>
        <p className="text-3xl">Sint perspiciatis ad, repudiandae sed error delectus dolore neque debitis! Sapiente aut nostrum est temporibus ea officiis id expedita iste dolor magnam. Animi ullam officia ea dolores, vel inventore iure.</p>
        <p className="text-3xl">Sequi, ex. At quis assumenda impedit dolorem, odio harum quas aliquid? Sint amet soluta iste culpa, cumque recusandae, tempore eligendi, quasi sit fugit nostrum ex. Excepturi aliquam atque doloribus vel!</p>
        <p className="text-3xl">Explicabo natus, soluta repellendus ipsa suscipit earum cumque facilis quaerat quia dolore repudiandae? Alias accusamus sed eos odit rerum ab exercitationem, dolore, eum quidem nobis ea? Est earum rem dicta.</p>
        <p className="text-3xl">Veritatis itaque neque assumenda cumque, ipsam accusamus voluptatibus laboriosam vel, obcaecati et, nesciunt nisi! Minima dolorem ullam nihil eveniet explicabo, velit cupiditate deleniti? Necessitatibus magnam porro omnis quaerat enim quae?</p>
        <p className="text-3xl">Odit unde praesentium animi cum quas alias ab iusto saepe modi sapiente, optio natus totam? Maxime nobis distinctio voluptates quis saepe ex impedit, omnis temporibus aliquid tempora porro obcaecati et.</p>
        <p className="text-3xl">Quis, magnam quia laboriosam magni autem commodi consectetur illo maiores doloremque non harum debitis a minus expedita enim qui mollitia officia, aperiam voluptate vitae beatae? Veritatis quia explicabo ducimus. Quasi!</p>
        <p className="text-3xl">Voluptate, earum magni perferendis, quidem libero pariatur consectetur nostrum, quibusdam magnam iste aliquid accusamus aperiam numquam nisi. Quae ratione modi laboriosam unde delectus quaerat incidunt accusamus, voluptas earum amet minima.</p>
        <p className="text-3xl">Molestiae nam ipsum debitis laborum suscipit voluptates voluptas officiis illo iste facere repudiandae voluptatem facilis atque assumenda ex totam nostrum maxime, laudantium reiciendis distinctio dolore quo, culpa ipsa et! Architecto?</p>
        <p className="text-3xl">Officia odio aut nesciunt voluptates consectetur minima, commodi quisquam quam similique est? Modi aliquid labore, autem sunt blanditiis delectus commodi perspiciatis quo voluptas, nisi dolores eum rerum, laudantium architecto recusandae.</p>
        <p className="text-3xl">Aut eligendi, officia officiis nobis, quod perspiciatis assumenda sequi ut nostrum aperiam impedit minima inventore unde. Earum corrupti voluptas porro suscipit numquam dolor ut quis ipsam. Vitae ipsa eveniet non.</p>
        <p className="text-3xl">Reprehenderit fugit quos ab repellat sunt nesciunt quasi perspiciatis adipisci repellendus ex ipsa facere corrupti sit labore quod vero recusandae explicabo pariatur tenetur aperiam blanditiis, laborum delectus autem! Iure, qui.</p>
        <p className="text-3xl">Voluptate sit maiores accusamus dignissimos deserunt ipsa dolorum quod neque illum nihil deleniti doloremque provident, rem voluptatum nesciunt eaque incidunt nulla rerum? Assumenda sunt ea magnam. Esse itaque nobis magni.</p>
        <p className="text-3xl">Tempore, dolore iusto voluptate est officia omnis illum officiis suscipit itaque aliquid, esse natus voluptatum modi architecto odit dolores. Doloribus incidunt odit fuga quis modi ad nisi aut itaque consequuntur.</p>
        <p className="text-3xl">Itaque magni minus libero ad eaque! Error temporibus, libero veniam dolorum quo dolor officia delectus eveniet cum laudantium voluptatem assumenda eius adipisci magnam aliquam corporis nisi placeat voluptates doloribus magni.</p>
        <p className="text-3xl">Repudiandae fuga exercitationem, sint, blanditiis consequuntur eum veniam officiis numquam cupiditate voluptatem repellendus. Doloremque, tenetur. Aspernatur voluptates deleniti incidunt dolor? Eos commodi asperiores consequatur in beatae voluptatum tempora unde nesciunt.</p>
        <p className="text-3xl">Eveniet accusantium, amet eum provident expedita enim. Officia in debitis quasi sequi aperiam a magnam! Inventore, ratione saepe ipsam blanditiis necessitatibus commodi nam optio! Omnis illum quos ratione odit quo.</p>
        <p className="text-3xl">Pariatur laborum id quae provident alias dolorem impedit, modi ut laudantium eos quod quos amet? Nobis accusantium, iusto, voluptas quia praesentium tempore, explicabo odit hic quaerat vitae delectus consequatur? Modi.</p>
        <p className="text-3xl">Placeat impedit iste incidunt culpa esse deserunt accusamus architecto, consequatur nemo quibusdam atque corrupti. Expedita officiis aut, beatae harum consequuntur, rem consequatur incidunt minus exercitationem odit sapiente minima aliquam tempora.</p>
        <p className="text-3xl">Quo eius, illum enim harum autem numquam facilis tenetur assumenda vel vero necessitatibus, molestias vitae ipsum repellat obcaecati perferendis quasi incidunt aliquam aspernatur repellendus esse? Ipsum quia numquam ducimus laboriosam.</p>
        <p className="text-3xl">Quidem fugiat dolorem culpa quia animi. Nostrum, repellat atque autem similique exercitationem libero harum quo quae quia voluptates nesciunt ea quidem consectetur voluptate ab vel rem ullam ducimus sunt explicabo!</p>
        <p className="text-3xl">Ad libero ab earum. Adipisci eum, placeat velit ipsa, facilis nulla nesciunt fugit excepturi magnam doloremque rerum quasi sit nam dolor deserunt? Ratione aliquam, vitae sit perferendis possimus natus sapiente!</p>
        <p className="text-3xl">Tempora odit nam quod accusantium quibusdam placeat quas vel corrupti ex temporibus facere necessitatibus nihil, cum minima neque dolore iste ullam dicta sunt eum dolores voluptatum quae libero doloribus! Fugit.</p>
        <p className="text-3xl">Rem aut ducimus aspernatur quo iure sint inventore illum similique veniam ratione, natus magni in quam vero suscipit perferendis accusantium? Assumenda expedita excepturi omnis beatae, officia veniam aspernatur amet aliquam?</p>
        <p className="text-3xl">Nobis eveniet non, modi officia ex error culpa similique aperiam ea repellendus sunt odio dolore molestiae soluta excepturi recusandae accusantium est exercitationem possimus odit aliquid asperiores quasi omnis impedit! Quam.</p>
        <p className="text-3xl">Quidem ratione quod ea sapiente! Officia quasi aliquid nostrum at possimus dolores exercitationem, nesciunt pariatur deserunt placeat saepe error, distinctio delectus ipsum ducimus, quas voluptatem eius provident. Praesentium, iure! Blanditiis?</p>
        <p className="text-3xl">Odio quibusdam ratione fugiat possimus. Fuga accusamus tempora quod minus quo? Maiores nulla quis saepe odio expedita doloribus, doloremque eveniet at. Quam aperiam incidunt sequi beatae voluptatem in laborum. Ipsum.</p>
        <p className="text-3xl">Accusantium voluptas, iusto possimus dolore voluptatem ullam nobis labore exercitationem cumque libero reprehenderit inventore culpa tenetur fuga quia adipisci atque blanditiis delectus vitae tempore? Accusamus corporis ab id sequi quisquam.</p>
      </div> */}
      
    </body>
  );
}

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/working">Working</Link>
//           </li>
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }



// function App() {
//   return (
//     <div className="h-screen w-screen bg-[#3AAFA9] relative">
//       <div className="bg-[#3AAFA9] h-[10%]">
//         <img src = "./resized_white_logo.svg" className = "bg-[#3AAFA9] h-full w-[5%] resize-y"/>
//         <h1 className="font-bold text-6xl uppercase fixed top-7 left-[5%] drop-shadow-md text-[#FEFFFF] font-mono">
//           Room Maker
//         </h1>
//       </div>
//       <div className="bg-blue-100 h-[90%] w-[5%] fixed top-[10%]">
//         <Sidebar />
//       </div>
//       <div className="h-[85%] w-[85%] bg-red-200 drop-shadow-lg fixed inset-[10%] left-[5%]">
//         <Canvas>
//           <color attach="background" args={["#983322"]} />
//           <Experience />
//         </Canvas> 
//       </div>
//     </div>
//   )
// }

export default App;


/*<fog attach="background" args={["#101010", 10, 20]} />*/