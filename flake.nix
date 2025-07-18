{
  inputs.nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-24.11"; # Final channel that supports nogejs-18
  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs-18_x
      ];
    };
  };
}
