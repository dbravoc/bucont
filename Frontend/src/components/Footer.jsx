import lawitec from '../assets/img/Lawitec - Frame 8.jpeg'


export default function Footer() {
    return (
      <div className="px-10 flex justify-center gap-x-3 items-center py-10 mt-20 border-t-2 border-gray-200">
        <a href="#" className="-m-1.5 p-1.5">
              <img
                className="max-h-12 max-w-12"
                src= {lawitec}
                alt=""
              />
            </a>
          <ul>
          <p className="text-left text-xs font-semibold text-gray-900">
            Oficina remota.
          </p>
          <p className="text-left text-xs font-light text-emerald-700">
            Somos nómades digitales apasionados por la tecnología e innovación.
          </p>
          </ul>
      </div>
    );
  }
  