/**
 * state.js — Estado global da aplicação
 * Centraliza todos os parâmetros da marca d'água.
 */

const State = (() => {
  const _state = {
    author:   'João Silva Fotografia',
    contact:  '@joaosilva.foto',
    color:    '#ffffff',
    opacity:  35,
    fontSize: 26,
    angle:    -30,
    spacing:  180,
    mode:     'distributed',
    bg:       '#888888',
  };

  return {
    get: (key)        => _state[key],
    set: (key, value) => { _state[key] = value; },
    all: ()           => ({ ..._state }),
  };
})();
