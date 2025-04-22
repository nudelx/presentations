import React from 'react'

export default (data) => {
  console.log('data', data)
  const ip = data.data.address._attributes.addr
  const name = Array.isArray(data.data.hostnames.hostname)
    ? data.data.hostnames.hostname[0]._attributes.name
    : data.data.hostnames.hostname._attributes.name
  const ports = data.data.ports.port
  console.log(ports)
  return (
      <ul className="card-data">
        <li className="title">{name}</li>
        <li className="inline">
          <div className="line-title">IP</div>
          <div>{ip}</div>
        </li>

        <li className="inline">
          <div className="line-title">HOST</div>
          <div>{name}</div>
        </li>

    
        <li>
          <ul className="inside">
            {ports.map((p, i) => [
              <li key={i} className="inline ">
                <div className="line-title"><i>service</i></div>
                <div><i>{p.service._attributes.name}</i></div>
              </li>,
              <li  className="inline">
                <div className="line-title"><i>state</i></div>
                <div><i>{p.state._attributes.reason}</i></div>
              </li>,
              <li  className="inline">
                <div className="line-title"><i>protocol</i></div>
                <div><i>{p._attributes.protocol}</i>: <i>{p._attributes.portid}</i></div>
              </li>,
            ])}
          </ul>
        </li>
      </ul>
  )
}
